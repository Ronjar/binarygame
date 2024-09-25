type BinaryQuestion = {
    bitCount: number,
    numbers: number[],
    isSumEnabled: boolean,
    areIndicatorsEnabled: boolean
};

type LevelToBits = {
    level: number,
    bits: number
};

function generateQuestions(level: number): BinaryQuestion {
    const levelBits: LevelToBits[] = [
        { level: 1, bits: 2 }, // Level 1: bis zu 2 Binärstellen (Zahlen bis 3)
        { level: 2, bits: 3 }, // Level 2: bis zu 3 Binärstellen (Zahlen bis 7)
        { level: 4, bits: 4 },  // Level 3: bis zu 4 Binärstellen (Zahlen bis 15)
        { level: 7, bits: 5 },  // Level 3: bis zu 4 Binärstellen (Zahlen bis 31)
        { level: 10, bits: 6 },  // Level 3: bis zu 4 Binärstellen (Zahlen bis 63)
        { level: 14, bits: 7 },  // Level 3: bis zu 4 Binärstellen (Zahlen bis 127)
        { level: 20, bits: 8 }  // Level 3: bis zu 4 Binärstellen (Zahlen bis 256)
    ];

    // Ermittle die Anzahl der Bits für das angegebene Level
    const bits = levelBits.reduce((acc, lb) => lb.level <= level ? lb.bits : acc, 8); // Standardmäßig 2 Bits, falls keine passende Stufe gefunden wird
    const areIndicatorsEnabled = levelBits.find(lb => lb.level === level) !== undefined;
    console.log("Indicators:" + areIndicatorsEnabled + " for level: " + level);

    const maxNumber = Math.pow(2, bits) - 1;
    const numbers = new Set<number>();

    // Generiere drei einzigartige Zahlen
    while (numbers.size < 3) {
        numbers.add(Math.floor(Math.random() * (maxNumber + 1)));
    }

    // Konvertiere das Set zurück in ein Array
    const uniqueNumbers = Array.from(numbers);

    const question: BinaryQuestion = {
        bitCount: bits,
        numbers: uniqueNumbers,
        isSumEnabled: areIndicatorsEnabled && bits > 5,
        areIndicatorsEnabled: areIndicatorsEnabled
    };

    return question;
}

export { generateQuestions };
