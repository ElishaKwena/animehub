export const subscription = [
    {
      "id": "free",
      "name": "Genin Tier",
      "price": 0,
      "billing": "forever free",
      "description": "Start watching with limited access.",
      "features": [
        "Access to Episode 1 of all series",
        "720p streaming with ads",
        "Limited library (no exclusives)",
        "Watch on 1 device"
      ],
      "cta_text": "Start Watching",
      "tag": "For new users"
    },
    {
      "id": "premium",
      "name": "Hokage Tier",
      "price": 7.99,
      "billing": "per month | $59.99/year (save 30%)",
      "description": "Full access, no restrictions.",
      "features": [
        "Ad-free streaming",
        "Full library + exclusives",
        "4K/HDR quality",
        "Offline downloads",
        "Watch on 3 devices"
      ],
      "cta_text": "Start 7-Day Free Trial",
      "tag": "Most popular"
    },
    {
      "id": "family",
      "name": "Nakama Plan",
      "price": 12.99,
      "billing": "per month | $99.99/year (save 15%)",
      "description": "Share with up to 4 people.",
      "features": [
        "All Premium benefits",
        "4 simultaneous streams",
        "Shared watchlists",
        "Kid-friendly profiles"
      ],
      "cta_text": "Get Discount",
      "tag": "Best value"
    }
  ]

import headband from '../assets/images/headband.jpg'
import hokage from '../assets/images/hokage.jpg'
import family from '../assets/images/family.jpg'


export const tiers =[
    {
        id:1,
        "name": "Genin Tier",
        "badge":"Free",
        "subtitle": "Start your mission",
        "banner":headband
    },
    {
        id:2,
        "name": "Hokage Tier",
        "badge":"Premium",
        "subtitle": "Rule the village",
        "banner":hokage
    },
    {
        id:3,
        "name": "Nakam Tier",
        "badge":"Family",
        "subtitle": "Protect your crew",
        "banner":family
    }
]

