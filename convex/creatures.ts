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