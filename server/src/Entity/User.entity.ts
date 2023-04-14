import { IUser, IUserCreate, IUserId } from '../Types/User'
import { User } from '../Schema/User.schema'
import bcrypt from 'bcrypt'
import { ILogin } from '../Types/Auth'

export default class UserEntity {
  async signup({
    email,
    username,
    password,
    firstname,
    lastname,
  }: IUserCreate): Promise<IUser> {
    const hash = await bcrypt.hash(password, 10)
    const newUser = new User({
      email,
      username,
      password: hash,
      firstname,
      lastname,
    })
    return newUser.save()
  }

  async login({ email, password }: ILogin): Promise<IUser> {
    const user: IUser | null = await User.findOne({ email: email })
    if (user) {
      const validPwd = await bcrypt.compare(password, user.password)
      if (validPwd) {
        return user
      } else {
        throw new Error('Email or password is incorrect')
      }
    } else {
      throw new Error('Email or password is incorrect')
    }
  }

  async deleteAccount({ id }: IUserId): Promise<boolean> {
    await User.findByIdAndDelete({ _id: id })
    return true
  }

  async getAllUsers(): Promise<IUser[] | Error | null> {
    return User.find({}, { password: 0 }).populate({
      path: 'posts',
      model: 'Post',
    })
  }

  async getById({ id }: IUserId): Promise<IUser | Error | null> {
    return User.findOne({ _id: id }, { password: 0 })
  }

  async assignPostToUser({
    id,
    user,
  }: {
    id: string
    user: string
  }): Promise<void | null> {
    return User.findByIdAndUpdate(
      { _id: user },
      { $push: { posts: id } },
      { returnDocument: 'after' }
    )
  }

  /*    async createPost({content, user}: { content: string, user: string }) {
            const newPost = new Post({content})

            await User.findByIdAndUpdate(
                {_id: user},
                {$push: {posts: newPost}},
                {returnDocument: "after"}
            )
            return newPost
        }

        async deletePost({id, user}: { id: string, user: string }) {
            const posts: any = await User.find({_id: user}).select("posts")
            const newPosts: IPost[] = []
            posts[0].posts.forEach((post: IPost) => {
                if (post._id?.toString() !== id) {
                    newPosts.push(post)
                }
            })
            await User.findOneAndUpdate({_id: user}, {posts: newPosts})
            return newPosts
        }*/
}
