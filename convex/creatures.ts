import { v } from "convex/values"
import { query, mutation, action } from "./_generated/server"
import { api } from "./_generated/api"


export const addCreature = mutation({
  args: {
    userId: v.string(),
    creatureType: v.string(),
    creatureName: v.string(),
    creatureInfo: v.object({})
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("creatures", {
      userId: args.userId,
      creatureType: args.creatureType,
      creatureName: args.creatureName,
      creatureInfo: args.creatureInfo
    })
  }
})

export const getUserCreatureList = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    const list = await ctx.db
      .query("creatures")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .take(1000)

    return list
  }
})

export const getUserCreature = query({
  args: {
    userId: v.string(),
    _id: v.string()
  },
  handler: async (ctx, args) => {
    const creature = await ctx.db
      .query("creatures")
      .filter((q) => q.eq(q.field("_id"), args._id))
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first()
    return creature
  }
})