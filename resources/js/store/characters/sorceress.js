export default {
    class: 'Sorceress',
    trees: [
        {
            name: 'Cold Spells',
            isActive: true,
            skills: [
                {
                    id: 1,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 2,
                    isPlaceholder: false,
                    name: 'Ice Bolt',
                    description: 'Shoots a bolt of ice that damages and slows your victim.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: false,
                    name: 'Frozen Armor',
                    description: 'Gives a defense bonus and freezes any melee attacker that hits you.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: false,
                    name: 'Frost Nova',
                    description: 'Creates an expanding ring of ice and frost that damages and slows enemies.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: false,
                    name: 'Ice Blast',
                    description: 'Creates a bolt of ice that completely freezes a target.',
                    points: 0,
                    prerequisites: ['Ice Bolt'],
                    unlockedBy: ['Ice Bolt'],
                    available: false,
                },
                {
                    id: 6,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 7,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 8,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 9,
                    isPlaceholder: false,
                    name: 'Shiver Armor',
                    description: 'Defense bonus, plus any melee attacker that attacks you takes damage and is slowed.',
                    points: 0,
                    prerequisites: ['Frozen Armor', 'Ice Bolt', 'Ice Blast'],
                    unlockedBy: ['Frozen Armor', 'Ice Blast'],
                    available: false,
                },
                {
                    id: 10,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 11,
                    isPlaceholder: false,
                    name: 'Glacial Spike',
                    description: 'A shard of ice that inflicts massive cold damage and explodes to freeze nearby enemies.',
                    points: 0,
                    prerequisites: ['Ice Bolt', 'Ice Blast'],
                    unlockedBy: ['Ice Blast'],
                    available: false,
                },
                {
                    id: 12,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 13,
                    isPlaceholder: false,
                    name: 'Blizzard',
                    description: 'Summons an ice storm to rain cold death onto your enemies.',
                    points: 0,
                    prerequisites: ['Ice Bolt', 'Ice Blast', 'Frost Nova', 'Glacial Spike'],
                    unlockedBy: ['Frost Nova', 'Glacial Spike'],
                    available: false,
                },
                {
                    id: 14,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 15,
                    isPlaceholder: false,
                    name: 'Chilling Armor',
                    description: 'Confers a defense bonus and launches an ice bolt against ranged attackers.',
                    points: 0,
                    prerequisites: ['Frozen Armor', 'Ice Bolt', 'Ice Blast', 'Shiver Armor'],
                    unlockedBy: ['Shiver Armor'],
                    available: false,
                },
                {
                    id: 16,
                    isPlaceholder: false,
                    name: 'Frozen Orb',
                    description: 'A pulsating orb that shreds an area with ice bolts.',
                    points: 0,
                    prerequisites: ['Ice Bolt' ,'Ice Blast', 'Frost Nova', 'Glacial Spike', 'Blizzard'],
                    unlockedBy: ['Blizzard'],
                    available: false,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Cold Mastery',
                    description: 'Passive Effect: Pierces the cold resistance of your enemies.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 18,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
            ]
        },
        {
            name: 'Lightning Spells',
            isActive: false,
            skills: [
                {
                    id: 1,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 2,
                    isPlaceholder: false,
                    name: 'Charged Bolt',
                    description: 'Fires multiple, jumping bolts of electricity that seek their targets. ',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: false,
                    name: 'Static Field',
                    description: 'Every enemy in a radius around you lose 25% of their current health.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 6,
                    isPlaceholder: false,
                    name: 'Telekinesis',
                    description: 'Allows you to pick up items, trigger objects, and attack others at a distance.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 7,
                    isPlaceholder: false,
                    name: 'Nova',
                    description: 'Creates an expanding ring of electricity that does massive damage.',
                    points: 0,
                    prerequisites: ['Static Field'],
                    unlockedBy: ['Static Field'],
                    available: false,
                },
                {
                    id: 8,
                    isPlaceholder: false,
                    name: 'Lightning',
                    description: 'Casts a bolt of lightning.',
                    points: 0,
                    prerequisites: ['Charged Bolt'],
                    unlockedBy: ['Charged Bolt'],
                    available: false,
                },
                {
                    id: 9,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 10,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 11,
                    isPlaceholder: false,
                    name: 'Chain Lightning',
                    description: 'Casts a lightning bolt that jumps through multiple targets.',
                    points: 0,
                    prerequisites: ['Charged Bolt', 'Lightning'],
                    unlockedBy: ['Lightning'],
                    available: false,
                },
                {
                    id: 12,
                    isPlaceholder: false,
                    name: 'Teleport',
                    description: 'Instantly transports you between two points.',
                    points: 0,
                    prerequisites: ['Telekinesis'],
                    unlockedBy: ['Telekinesis'],
                    available: false,
                },
                {
                    id: 13,
                    isPlaceholder: false,
                    name: 'Thunder Storm',
                    description: 'Summons a thunderstorm that periodically blasts a nearby enemy with a bolt of lightning.',
                    points: 0,
                    prerequisites: ['Charged Bolt', 'Static Field', 'Lightning', 'Nova', 'Chain Lightning'],
                    unlockedBy: ['Nova', 'Chain Lightning'],
                    available: false,
                },
                {
                    id: 14,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 15,
                    isPlaceholder: false,
                    name: 'Energy Shield',
                    description: 'Absorbs magical and some physical damage to Mana instead of Life.',
                    points: 0,
                    prerequisites: ['Charged Bolt', 'Telekinesis', 'Lightning', 'Teleport', 'Chain Lightning'],
                    unlockedBy: ['Teleport', 'Chain Lightning'],
                    available: false,
                },
                {
                    id: 16,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Lightning Mastery',
                    description: 'Passive Effect: Increases the damage of lightning spells.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 18,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
            ]
        },
        {
            name: 'Fire Spells',
            isActive: false,
            skills: [
                {
                    id: 1,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 2,
                    isPlaceholder: false,
                    name: 'Fire Bolt',
                    description: 'Creates a bolt of fire. ',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 3,
                    isPlaceholder: false,
                    name: 'Warmth',
                    description: 'Passive Effect: Increases your Mana recovery rate.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 4,
                    isPlaceholder: false,
                    name: 'Inferno',
                    description: 'A spout of flame that burns your enemies.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 5,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 6,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 7,
                    isPlaceholder: false,
                    name: 'Blaze',
                    description: 'Leave a wall of fire in your footsteps.',
                    points: 0,
                    prerequisites: ['Inferno'],
                    unlockedBy: ['Inferno'],
                    available: false,
                },
                {
                    id: 8,
                    isPlaceholder: false,
                    name: 'Fireball',
                    description: 'Creates a ball of fire that explodes on impact.',
                    points: 0,
                    prerequisites: ['Fire Bolt'],
                    unlockedBy: ['Fire Bolt'],
                    available: false,
                },
                {
                    id: 9,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 10,
                    isPlaceholder: false,
                    name: 'Fire Wall',
                    description: 'Creates a wall of fire.',
                    points: 0,
                    prerequisites: ['Inferno', 'Blaze'],
                    unlockedBy: ['Blaze'],
                    available: false,
                },
                {
                    id: 11,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 12,
                    isPlaceholder: false,
                    name: 'Enchant',
                    description: 'Temporarily adds Fire damage to a weapon.',
                    points: 0,
                    prerequisites: ['Fire Bolt', 'Warmth', 'Fireball'],
                    unlockedBy: ['Warmth', 'Fireball'],
                    available: false,
                },
                {
                    id: 13,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 14,
                    isPlaceholder: false,
                    name: 'Meteor',
                    description: 'Draws down a meteor from the heavens to smash your enemies.',
                    points: 0,
                    prerequisites: ['Fire Bolt', 'Inferno', 'Blaze', 'Fire Wall', 'Fireball'],
                    unlockedBy: ['Fire Wall', 'Fireball'],
                    available: false,
                },
                {
                    id: 15,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 16,
                    isPlaceholder: true,
                    name: 'Placeholder',
                    description: 'Placeholder',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 17,
                    isPlaceholder: false,
                    name: 'Fire Mastery',
                    description: 'Passive Effect: Increases the damage done by your fire spells.',
                    points: 0,
                    prerequisites: ['None'],
                    unlockedBy: ['None'],
                    available: true,
                },
                {
                    id: 18,
                    isPlaceholder: false,
                    name: 'Hydra',
                    description: 'Creates a multi-headed beast that attacks your enemies with bolts of fire.',
                    points: 0,
                    prerequisites: ['Fire Bolt', 'Warmth', 'Fireball', 'Enchant'],
                    unlockedBy: ['Enchant'],
                    available: false,
                },
            ]
        },
    ],
}