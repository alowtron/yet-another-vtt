import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const get = query({
  args: { messagesGroupId: v.number() },
  handler: async (ctx, args) => {
    const group = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("messagesGroupId"), args.messagesGroupId))
      .first()
    return group ? group.messages : []
  },
})

export const send = mutation({
  args: {
    messagesGroupId: v.number(),
    message: v.string(),
    userName: v.string(),
    userId: v.number(),
    timeSent: v.number() 
  },
  handler: async (ctx, args) => {
    const group = await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("messagesGroupId"), args.messagesGroupId))
      .first()

    if (!group) {
      throw new Error("Group not found.")
    }

    const newMessage ={
      message: args.message,
      userName: args.userName,
      userId: args.userId,
      timeSent: args.timeSent
    }

    await ctx.db.patch(group._id, {
      messages: [...group.messages, newMessage]
    })
  }
})
