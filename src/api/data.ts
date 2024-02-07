import { StaticDataTypes } from "@/types";




export const staticData : StaticDataTypes[] = [{
  AAPL: {
      lastPrice: 188.96,
      openPrice: 190.51,
      lowPrice: 188.61,
      change: "-0.34",
      percentChange: "-0.18",
      volume: "32.38M",
      date: "Current Date Not Specified",
      stockChangeDirection: "decrease",
      news: [
        {
          headline: "Nvidia's stock market value on verge of overtaking Amazon",
          date: "Recently Published",
          source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg"
        },
        {
          headline: "Apple rumored to be working on a clamshell foldable iPhone, shares gain",
          date: "Recently Published",
          source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg"
        }
      ],
      companyInfo: {
        name: "Apple Inc",
        industry: "Technology",
        ceo: "Information Not Specified",
        symbol: "AAPL"
      }
  },
  MSFT: {
    lastPrice: "405.49",
    openPrice: "405.66",
    lowPrice: "402.91",
    change: "-0.16",
    percentChange: "-0.04%",
    volume: "17.63M",
    date: "Not Specified",
    stockChangeDirection: "decrease",
    news: [
      {
        headline: "Microsoft in talks to end trade body's cloud computing complaint",
        date: "Recently Published",
        source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg"
      },
      {
        headline: "Britain, France lead 35 nation agreement on controlling spyware, mercenary hackers",
        date: "Recently Published",
        source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg"
      }
    ],
    companyInfo: {
      name: "Microsoft Corporation",
      industry: "Technology",
      ceo: "Not Specified",
      symbol: "MSFT"
    }
  },
  NVIDIA: {
    lastPrice: 682.23,
    openPrice: 697.54,
    lowPrice: 663.00,
    change: -11.09,
    percentChange: -1.60,
    volume: "67.22M",
    date: "06/02",
    stockChangeDirection: "decrease",
    news: [
      { headline: "NVIDIA launches new AI products", date: "06/01",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg", },
      { headline: "NVIDIA stock dips despite market recovery", date: "06/02",source: "Bloomberg", imageUrl:"https://cdn.benzinga.com/files/images/story/2024/TSLAAAPL.png?width=1200&height=800&fit=crop" }
    ],
    companyInfo: {
      name: "NVIDIA Corporation",
      industry: "Technology",
      ceo: "Jensen Huang",
      symbol: "NVIDIA" // Corrected typo from "NVDIA" to "NVIDIA"
    }
  },
  PLTR: {
    lastPrice: 21.86,
    openPrice: 22.18,
    lowPrice: 19.76,
    change: 5.14,
    percentChange: 30.74,
    volume: "416.86M",
    stockChangeDirection: "decrease",
    date: "06/02",
    news: [
      { headline: "Palantir wins government contract, shares soar", date: "06/01",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg" },
      { headline: "Analysts divided on Palantir's future", date: "06/02",source: "Benzinga",imageUrl: "https://www.marketwatch.com/story/stock-market-investors-fear-a-megacap-meltdown-heres-what-history-says-f22744af" }
    ],
    companyInfo: {
      name: "Palantir Technologies Inc.",
      industry: "Software",
      ceo: "Alexander Karp",
      symbol: "PLTR"
    }
  },
  TSLA: {
    lastPrice: 185.10,
    openPrice: 186.49,
    lowPrice: 177.11,
    change: 4.04,
    percentChange: 2.23,
    volume: "121.15M",
    date: "06/02",
    stockChangeDirection: "increase",
    news: [
      { headline: "Tesla to unveil new Model S variant", date: "05/30",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg" },
      { headline: "Tesla's European expansion faces regulatory hurdles", date: "06/02", source:"Investors Business Daily", imageUrl:"https://images.mktw.net/im-43588369?width=700&height=360" }
    ],
    companyInfo: {
      name: "Tesla, Inc.",
      industry: "Automotive",
      ceo: "Elon Musk",
      symbol: "TSLA"
    }
  },
  BABA: { // Adjusted the name for consistency in JavaScript naming conventions
    lastPrice: 78.23,
    openPrice: 78.34,
    lowPrice: 75.73,
    change: 3.60,
    percentChange: 4.82,
    volume: "38.29M",
    date: "06/02",
    stockChangeDirection: "increase",
    news: [
      { headline: "Alibaba exceeds earnings expectations", date: "06/01",source: "Bloomberg", imageUrl:"https://cdn.benzinga.com/files/images/story/2024/TSLAAAPL.png?width=1200&height=800&fit=crop" },
      { headline: "Alibaba invests in logistics to boost efficiency", date: "06/03", source:"Forbes", imageUrl: "https://www.marketwatch.com/story/stock-market-investors-fear-a-megacap-meltdown-heres-what-history-says-f22744af" }
    ],
    companyInfo: {
      name: "Alibaba Group Holding Limited",
      industry: "E-commerce",
      ceo: "Daniel Zhang",
      symbol: "BABA"
    }
  }
}];