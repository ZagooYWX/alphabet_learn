// 字母数据 - 包含26个英文字母的信息
const alphabetData = [
    {
        letter: 'A',
        lowercase: 'a',
        phonetic: '/eɪ/',
        word: {
            text: 'Apple',
            phonetic: '/ˈæpl/',
            meaning: '苹果',
            emoji: '🍎'
        }
    },
    {
        letter: 'B',
        lowercase: 'b',
        phonetic: '/biː/',
        word: {
            text: 'Ball',
            phonetic: '/bɔːl/',
            meaning: '球',
            emoji: '⚽'
        }
    },
    {
        letter: 'C',
        lowercase: 'c',
        phonetic: '/siː/',
        word: {
            text: 'Cat',
            phonetic: '/kæt/',
            meaning: '猫',
            emoji: '🐱'
        }
    },
    {
        letter: 'D',
        lowercase: 'd',
        phonetic: '/diː/',
        word: {
            text: 'Dog',
            phonetic: '/dɒɡ/',
            meaning: '狗',
            emoji: '🐶'
        }
    },
    {
        letter: 'E',
        lowercase: 'e',
        phonetic: '/iː/',
        word: {
            text: 'Elephant',
            phonetic: '/ˈelɪfənt/',
            meaning: '大象',
            emoji: '🐘'
        }
    },
    {
        letter: 'F',
        lowercase: 'f',
        phonetic: '/ef/',
        word: {
            text: 'Fish',
            phonetic: '/fɪʃ/',
            meaning: '鱼',
            emoji: '🐟'
        }
    },
    {
        letter: 'G',
        lowercase: 'g',
        phonetic: '/dʒiː/',
        word: {
            text: 'Grape',
            phonetic: '/ɡreɪp/',
            meaning: '葡萄',
            emoji: '🍇'
        }
    },
    {
        letter: 'H',
        lowercase: 'h',
        phonetic: '/eɪtʃ/',
        word: {
            text: 'House',
            phonetic: '/haʊs/',
            meaning: '房子',
            emoji: '🏠'
        }
    },
    {
        letter: 'I',
        lowercase: 'i',
        phonetic: '/aɪ/',
        word: {
            text: 'Ice cream',
            phonetic: '/ˈaɪs kriːm/',
            meaning: '冰淇淋',
            emoji: '🍦'
        }
    },
    {
        letter: 'J',
        lowercase: 'j',
        phonetic: '/dʒeɪ/',
        word: {
            text: 'Juice',
            phonetic: '/dʒuːs/',
            meaning: '果汁',
            emoji: '🧃'
        }
    },
    {
        letter: 'K',
        lowercase: 'k',
        phonetic: '/keɪ/',
        word: {
            text: 'Kite',
            phonetic: '/kaɪt/',
            meaning: '风筝',
            emoji: '🪁'
        }
    },
    {
        letter: 'L',
        lowercase: 'l',
        phonetic: '/el/',
        word: {
            text: 'Lion',
            phonetic: '/ˈlaɪən/',
            meaning: '狮子',
            emoji: '🦁'
        }
    },
    {
        letter: 'M',
        lowercase: 'm',
        phonetic: '/em/',
        word: {
            text: 'Monkey',
            phonetic: '/ˈmʌŋki/',
            meaning: '猴子',
            emoji: '🐵'
        }
    },
    {
        letter: 'N',
        lowercase: 'n',
        phonetic: '/en/',
        word: {
            text: 'Nest',
            phonetic: '/nest/',
            meaning: '鸟巢',
            emoji: '🪺'
        }
    },
    {
        letter: 'O',
        lowercase: 'o',
        phonetic: '/əʊ/',
        word: {
            text: 'Orange',
            phonetic: '/ˈɒrɪndʒ/',
            meaning: '橙子',
            emoji: '🍊'
        }
    },
    {
        letter: 'P',
        lowercase: 'p',
        phonetic: '/piː/',
        word: {
            text: 'Pig',
            phonetic: '/pɪɡ/',
            meaning: '猪',
            emoji: '🐷'
        }
    },
    {
        letter: 'Q',
        lowercase: 'q',
        phonetic: '/kjuː/',
        word: {
            text: 'Queen',
            phonetic: '/kwiːn/',
            meaning: '女王',
            emoji: '👸'
        }
    },
    {
        letter: 'R',
        lowercase: 'r',
        phonetic: '/ɑːr/',
        word: {
            text: 'Rabbit',
            phonetic: '/ˈræbɪt/',
            meaning: '兔子',
            emoji: '🐰'
        }
    },
    {
        letter: 'S',
        lowercase: 's',
        phonetic: '/es/',
        word: {
            text: 'Sun',
            phonetic: '/sʌn/',
            meaning: '太阳',
            emoji: '☀️'
        }
    },
    {
        letter: 'T',
        lowercase: 't',
        phonetic: '/tiː/',
        word: {
            text: 'Tiger',
            phonetic: '/ˈtaɪɡər/',
            meaning: '老虎',
            emoji: '🐯'
        }
    },
    {
        letter: 'U',
        lowercase: 'u',
        phonetic: '/juː/',
        word: {
            text: 'Umbrella',
            phonetic: '/ʌmˈbrelə/',
            meaning: '雨伞',
            emoji: '☂️'
        }
    },
    {
        letter: 'V',
        lowercase: 'v',
        phonetic: '/viː/',
        word: {
            text: 'Violin',
            phonetic: '/ˌvaɪəˈlɪn/',
            meaning: '小提琴',
            emoji: '🎻'
        }
    },
    {
        letter: 'W',
        lowercase: 'w',
        phonetic: '/ˈdʌbljuː/',
        word: {
            text: 'Watermelon',
            phonetic: '/ˈwɔːtəmelən/',
            meaning: '西瓜',
            emoji: '🍉'
        }
    },
    {
        letter: 'X',
        lowercase: 'x',
        phonetic: '/eks/',
        word: {
            text: 'Xylophone',
            phonetic: '/ˈzaɪləfəʊn/',
            meaning: '木琴',
            emoji: '🎹'
        }
    },
    {
        letter: 'Y',
        lowercase: 'y',
        phonetic: '/waɪ/',
        word: {
            text: 'Yo-yo',
            phonetic: '/ˈjəʊ jəʊ/',
            meaning: '悠悠球',
            emoji: '🪀'
        }
    },
    {
        letter: 'Z',
        lowercase: 'z',
        phonetic: '/zed/',
        word: {
            text: 'Zebra',
            phonetic: '/ˈzebrə/',
            meaning: '斑马',
            emoji: '🦓'
        }
    }
];

// 字母笔画路径数据（用于书写练习）
const letterStrokes = {
    'A': [
        { x: 50, y: 20 }, { x: 25, y: 80 },
        { x: 50, y: 20 }, { x: 75, y: 80 },
        { x: 35, y: 55 }, { x: 65, y: 55 }
    ],
    'B': [
        { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 45 }, { x: 30, y: 45 },
        { x: 30, y: 45 }, { x: 60, y: 45 }, { x: 60, y: 80 }, { x: 30, y: 80 }
    ],
    'C': [
        { x: 70, y: 30 }, { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 }
    ],
    'D': [
        { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 30, y: 20 }, { x: 55, y: 25 }, { x: 70, y: 50 }, { x: 55, y: 75 }, { x: 30, y: 80 }
    ],
    'E': [
        { x: 65, y: 20 }, { x: 30, y: 20 }, { x: 30, y: 80 }, { x: 65, y: 80 },
        { x: 30, y: 50 }, { x: 55, y: 50 }
    ],
    'F': [
        { x: 65, y: 20 }, { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 30, y: 50 }, { x: 55, y: 50 }
    ],
    'G': [
        { x: 70, y: 30 }, { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 },
        { x: 70, y: 55 }, { x: 50, y: 55 }
    ],
    'H': [
        { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 70, y: 20 }, { x: 70, y: 80 },
        { x: 30, y: 50 }, { x: 70, y: 50 }
    ],
    'I': [
        { x: 50, y: 20 }, { x: 50, y: 80 },
        { x: 35, y: 20 }, { x: 65, y: 20 },
        { x: 35, y: 80 }, { x: 65, y: 80 }
    ],
    'J': [
        { x: 65, y: 20 }, { x: 65, y: 65 }, { x: 50, y: 80 }, { x: 35, y: 70 }
    ],
    'K': [
        { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 65, y: 20 }, { x: 30, y: 50 }, { x: 65, y: 80 }
    ],
    'L': [
        { x: 35, y: 20 }, { x: 35, y: 80 }, { x: 65, y: 80 }
    ],
    'M': [
        { x: 20, y: 80 }, { x: 20, y: 20 }, { x: 50, y: 60 }, { x: 80, y: 20 }, { x: 80, y: 80 }
    ],
    'N': [
        { x: 30, y: 80 }, { x: 30, y: 20 }, { x: 70, y: 80 }, { x: 70, y: 20 }
    ],
    'O': [
        { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 }, { x: 70, y: 30 }, { x: 50, y: 20 }
    ],
    'P': [
        { x: 30, y: 80 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 45 }, { x: 30, y: 45 }
    ],
    'Q': [
        { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 30, y: 65 }, { x: 50, y: 75 }, { x: 70, y: 65 }, { x: 70, y: 30 }, { x: 50, y: 20 },
        { x: 58, y: 68 }, { x: 72, y: 82 }
    ],
    'R': [
        { x: 30, y: 80 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 45 }, { x: 30, y: 45 },
        { x: 30, y: 45 }, { x: 60, y: 80 }
    ],
    'S': [
        { x: 65, y: 28 }, { x: 50, y: 20 }, { x: 35, y: 28 }, { x: 35, y: 42 }, { x: 50, y: 50 }, { x: 65, y: 58 }, { x: 65, y: 72 }, { x: 50, y: 80 }, { x: 35, y: 72 }
    ],
    'T': [
        { x: 50, y: 20 }, { x: 50, y: 80 },
        { x: 25, y: 20 }, { x: 75, y: 20 }
    ],
    'U': [
        { x: 30, y: 20 }, { x: 30, y: 65 }, { x: 50, y: 80 }, { x: 70, y: 65 }, { x: 70, y: 20 }
    ],
    'V': [
        { x: 30, y: 20 }, { x: 50, y: 80 }, { x: 70, y: 20 }
    ],
    'W': [
        { x: 20, y: 20 }, { x: 30, y: 80 }, { x: 50, y: 50 }, { x: 70, y: 80 }, { x: 80, y: 20 }
    ],
    'X': [
        { x: 30, y: 20 }, { x: 70, y: 80 },
        { x: 70, y: 20 }, { x: 30, y: 80 }
    ],
    'Y': [
        { x: 30, y: 20 }, { x: 50, y: 50 }, { x: 70, y: 20 },
        { x: 50, y: 50 }, { x: 50, y: 80 }
    ],
    'Z': [
        { x: 30, y: 20 }, { x: 70, y: 20 }, { x: 30, y: 80 }, { x: 70, y: 80 }
    ]
};

// 小写字母笔画路径
const lowercaseStrokes = {
    'a': [
        { x: 60, y: 35 }, { x: 60, y: 80 },
        { x: 60, y: 50 }, { x: 45, y: 45 }, { x: 35, y: 55 }, { x: 35, y: 70 }, { x: 45, y: 80 }, { x: 60, y: 75 }
    ],
    'b': [
        { x: 35, y: 20 }, { x: 35, y: 80 },
        { x: 35, y: 55 }, { x: 50, y: 45 }, { x: 60, y: 55 }, { x: 60, y: 75 }, { x: 50, y: 82 }, { x: 35, y: 75 }
    ],
    'c': [
        { x: 60, y: 40 }, { x: 45, y: 30 }, { x: 35, y: 45 }, { x: 35, y: 65 }, { x: 45, y: 80 }, { x: 60, y: 70 }
    ],
    'd': [
        { x: 65, y: 20 }, { x: 65, y: 80 },
        { x: 65, y: 55 }, { x: 50, y: 45 }, { x: 40, y: 55 }, { x: 40, y: 75 }, { x: 50, y: 82 }, { x: 65, y: 75 }
    ],
    'e': [
        { x: 65, y: 50 }, { x: 50, y: 40 }, { x: 35, y: 50 }, { x: 35, y: 70 }, { x: 50, y: 80 }, { x: 65, y: 70 },
        { x: 35, y: 55 }, { x: 55, y: 55 }
    ],
    'f': [
        { x: 55, y: 20 }, { x: 55, y: 80 },
        { x: 55, y: 35 }, { x: 70, y: 25 },
        { x: 40, y: 50 }, { x: 70, y: 50 }
    ],
    'g': [
        { x: 60, y: 35 }, { x: 60, y: 90 }, { x: 50, y: 100 }, { x: 35, y: 95 },
        { x: 60, y: 50 }, { x: 45, y: 45 }, { x: 35, y: 55 }, { x: 35, y: 70 }, { x: 45, y: 80 }, { x: 60, y: 75 }
    ],
    'h': [
        { x: 30, y: 20 }, { x: 30, y: 80 },
        { x: 30, y: 50 }, { x: 50, y: 45 }, { x: 60, y: 55 }, { x: 60, y: 80 }
    ],
    'i': [
        { x: 50, y: 35 }, { x: 50, y: 20 },
        { x: 50, y: 45 }, { x: 50, y: 80 }
    ],
    'j': [
        { x: 60, y: 35 }, { x: 60, y: 20 },
        { x: 60, y: 45 }, { x: 60, y: 90 }, { x: 50, y: 100 }, { x: 40, y: 95 }
    ],
    'k': [
        { x: 35, y: 20 }, { x: 35, y: 80 },
        { x: 60, y: 45 }, { x: 35, y: 60 }, { x: 60, y: 80 }
    ],
    'l': [
        { x: 50, y: 20 }, { x: 50, y: 80 }
    ],
    'm': [
        { x: 25, y: 80 }, { x: 25, y: 45 }, { x: 40, y: 35 }, { x: 50, y: 45 }, { x: 60, y: 35 }, { x: 75, y: 45 }, { x: 75, y: 80 }
    ],
    'n': [
        { x: 30, y: 80 }, { x: 30, y: 45 }, { x: 50, y: 35 }, { x: 70, y: 45 }, { x: 70, y: 80 }
    ],
    'o': [
        { x: 50, y: 35 }, { x: 35, y: 45 }, { x: 35, y: 70 }, { x: 50, y: 80 }, { x: 65, y: 70 }, { x: 65, y: 45 }, { x: 50, y: 35 }
    ],
    'p': [
        { x: 35, y: 45 }, { x: 35, y: 95 },
        { x: 35, y: 50 }, { x: 50, y: 40 }, { x: 60, y: 50 }, { x: 60, y: 70 }, { x: 50, y: 80 }, { x: 35, y: 70 }
    ],
    'q': [
        { x: 65, y: 45 }, { x: 65, y: 95 },
        { x: 65, y: 50 }, { x: 50, y: 40 }, { x: 40, y: 50 }, { x: 40, y: 70 }, { x: 50, y: 80 }, { x: 65, y: 70 }
    ],
    'r': [
        { x: 35, y: 80 }, { x: 35, y: 45 }, { x: 50, y: 35 }, { x: 60, y: 42 }
    ],
    's': [
        { x: 60, y: 42 }, { x: 45, y: 35 }, { x: 40, y: 48 }, { x: 50, y: 55 }, { x: 60, y: 62 }, { x: 55, y: 78 }, { x: 40, y: 72 }
    ],
    't': [
        { x: 50, y: 25 }, { x: 50, y: 75 },
        { x: 35, y: 40 }, { x: 65, y: 40 }
    ],
    'u': [
        { x: 35, y: 35 }, { x: 35, y: 70 }, { x: 50, y: 80 }, { x: 65, y: 70 }, { x: 65, y: 35 }
    ],
    'v': [
        { x: 35, y: 35 }, { x: 50, y: 80 }, { x: 65, y: 35 }
    ],
    'w': [
        { x: 25, y: 35 }, { x: 35, y: 80 }, { x: 50, y: 55 }, { x: 65, y: 80 }, { x: 75, y: 35 }
    ],
    'x': [
        { x: 35, y: 35 }, { x: 65, y: 80 },
        { x: 65, y: 35 }, { x: 35, y: 80 }
    ],
    'y': [
        { x: 35, y: 35 }, { x: 50, y: 65 }, { x: 65, y: 35 },
        { x: 50, y: 65 }, { x: 50, y: 90 }, { x: 40, y: 100 }
    ],
    'z': [
        { x: 35, y: 35 }, { x: 65, y: 35 }, { x: 35, y: 80 }, { x: 65, y: 80 }
    ]
};
