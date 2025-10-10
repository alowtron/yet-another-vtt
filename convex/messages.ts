import { query } from "./_generated/server"
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