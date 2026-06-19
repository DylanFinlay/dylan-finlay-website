/**
 * A small, curated pool of favourite Bible verses. Kept local (rather than
 * fetched from a Bible API) so the widget responds instantly, never breaks
 * on network/rate-limit failures, and only ever surfaces verses I've chosen.
 *
 * Add or edit entries freely — the Extra page Bible-verse widget reads
 * directly from this list.
 */
export interface Verse {
  reference: string;
  text: string;
  translation: string;
}

export const VERSES: Verse[] = [
  {
    reference: "John 3:16",
    text: "For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life.",
    translation: "NRSV-CE",
  },
  {
    reference: "Philippians 4:13",
    text: "I can do all things through him who strengthens me.",
    translation: "NRSV-CE",
  },
  {
    reference: "Jeremiah 29:11",
    text: "For surely I know the plans I have for you, says the Lord, plans for your welfare and not for harm, to give you a future with hope.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 23:1",
    text: "The Lord is my shepherd, I shall not want.",
    translation: "NRSV-CE",
  },
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart, and do not rely on your own insight. In all your ways acknowledge him, and he will make straight your paths.",
    translation: "NRSV-CE",
  },
  {
    reference: "Isaiah 41:10",
    text: "Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand.",
    translation: "NRSV-CE",
  },
  {
    reference: "Romans 8:28",
    text: "We know that all things work together for good for those who love God, who are called according to his purpose.",
    translation: "NRSV-CE",
  },
  {
    reference: "Joshua 1:9",
    text: "I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 119:105",
    text: "Your word is a lamp to my feet and a light to my path.",
    translation: "NRSV-CE",
  },
  {
    reference: "Matthew 11:28-30",
    text: "Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest. Take my yoke upon you, and learn from me; for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.",
    translation: "NRSV-CE",
  },
  {
    reference: "Romans 8:38-39",
    text: "For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 46:10",
    text: "Be still, and know that I am God! I am exalted among the nations, I am exalted in the earth.",
    translation: "NRSV-CE",
  },
  {
    reference: "2 Corinthians 5:17",
    text: "So if anyone is in Christ, there is a new creation: everything old has passed away; see, everything has become new!",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 27:1",
    text: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
    translation: "NRSV-CE",
  },
  {
    reference: "Isaiah 40:31",
    text: "But those who wait for the Lord shall renew their strength, they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint.",
    translation: "NRSV-CE",
  },
  {
    reference: "John 14:6",
    text: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 121:1-2",
    text: "I lift up my eyes to the hills— from where will my help come? My help comes from the Lord, who made heaven and earth.",
    translation: "NRSV-CE",
  },
  {
    reference: "Ephesians 2:8-9",
    text: "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God— not the result of works, so that no one may boast.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 34:8",
    text: "O taste and see that the Lord is good; happy are those who take refuge in him.",
    translation: "NRSV-CE",
  },
  {
    reference: "Matthew 5:14-16",
    text: "You are the light of the world. A city built on a hill cannot be hid. No one after lighting a lamp puts it under the bushel basket, but on the lampstand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father in heaven.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 139:14",
    text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; that I know very well.",
    translation: "NRSV-CE",
  },
  {
    reference: "Romans 12:2",
    text: "Do not be conformed to this world, but be transformed by the renewing of your minds, so that you may discern what is the will of God— what is good and acceptable and perfect.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 91:1-2",
    text: "You who live in the shelter of the Most High, who abide in the shadow of the Almighty, will say to the Lord, 'My refuge and my fortress; my God, in whom I trust.'",
    translation: "NRSV-CE",
  },
  {
    reference: "1 Corinthians 13:4-5",
    text: "Love is patient; love is kind; love is not envious or boastful or arrogant or rude. It does not insist on its own way; it is not irritable or resentful.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 37:4",
    text: "Take delight in the Lord, and he will give you the desires of your heart.",
    translation: "NRSV-CE",
  },
  {
    reference: "Colossians 3:23",
    text: "Whatever your task, put yourselves into it, as done for the Lord and not for your masters.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 16:11",
    text: "You show me the path of life. In your presence there is fullness of joy; in your right hand are pleasures forevermore.",
    translation: "NRSV-CE",
  },
  {
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him, because he cares for you.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 103:1-2",
    text: "Bless the Lord, O my soul, and all that is within me, bless his holy name. Bless the Lord, O my soul, and do not forget all his benefits.",
    translation: "NRSV-CE",
  },
  {
    reference: "John 10:10",
    text: "The thief comes only to steal and kill and destroy. I came that they may have life, and have it abundantly.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 62:1-2",
    text: "For God alone my soul waits in silence; from him comes my salvation. He alone is my rock and my salvation, my fortress; I shall never be shaken.",
    translation: "NRSV-CE",
  },
  {
    reference: "Micah 6:8",
    text: "He has told you, O mortal, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 19:14",
    text: "Let the words of my mouth and the meditation of my heart be acceptable to you, O Lord, my rock and my redeemer.",
    translation: "NRSV-CE",
  },
  {
    reference: "Galatians 5:22-23",
    text: "By contrast, the fruit of the Spirit is love, joy, peace, patience, kindness, generosity, faithfulness, gentleness, and self-control. There is no law against such things.",
    translation: "NRSV-CE",
  },
  {
    reference: "Psalm 136:1",
    text: "O give thanks to the Lord, for he is good, for his steadfast love endures forever.",
    translation: "NRSV-CE",
  },
];
