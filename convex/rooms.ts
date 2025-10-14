import { query } from "./_generated/server"
import { v } from "convex/values"

export const getRoom = query({
  args: { roomId: v.number(), userId: v.string() },
  handler: async (ctx, args) => {
    const group = await ctx.db
      .query("rooms")
      .filter((q) => (q.eq(q.field("roomId"), args.roomId)))
      .first()
    if (!group) return false
    return group.users.includes(args.userId)
  }
})