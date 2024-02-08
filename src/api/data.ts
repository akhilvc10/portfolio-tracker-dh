import { StockDataTypes } from "@/types";




export const staticData : StockDataTypes[] = [{
  AAPL: {
      lastPrice: 188.96,
      openPrice: 190.51,
      lowPrice: 188.61,
      change: "-0.34",
      percentChange: "-0.18",
      volume: "32.38M",
      date: "Current Date Not Specified",
      stockChangeDirection: "decrease",
      dayRange: "$188.61 - $191.05",
      yearRange: "$143.90 - $199.62",
      marketCap: "2.92T USD",
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
        symbol: "AAPL",
        description:"Apple Inc., is an American multinational technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services. Devices include the iPhone, iPad, Mac, Apple Watch, and Apple TV; operating systems include iOS and macOS; and software applications and services include iTunes, iCloud, and Apple Music. As of March 2023, Apple is the world's largest company by market capitalization. In 2022, it was the largest technology company by revenue, with US$394.3 billion. As of June 2022, Apple was the fourth-largest personal computer vendor by unit sales, the largest manufacturing company by revenue, and the second-largest manufacturer of mobile phones in the world. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft. Apple was founded as Apple Computer Company on April 1, 1976, to produce and market Steve Wozniak's Apple I personal computer. The company was incorporated by Wozniak and Steve Jobs in 1977."
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
    dayRange: "$407.40 - $414.30",
    yearRange: "$245.61 - $415.32",
    marketCap: "3.08T USD",
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
      symbol: "MSFT",
      description: "Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington, United States. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, and the Edge web browser. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 14 in the 2022 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world's largest software maker by revenue as of 2022. It is considered one of the Big Five American information technology companies, alongside Alphabet, Amazon, Apple, and Meta. Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Windows. The company's 1986 initial public offering and subsequent rise in its share price created three billionaires and an estimated 12,000 millionaires among Microsoft employees."
    }
  },
  NVIDIA: {
    lastPrice: 682.23,
    openPrice: 697.54,
    lowPrice: 663.00,
    change: -11.09,
    percentChange: -1.60,
    volume: "67.22M",
    date: "Recently Updated",
    stockChangeDirection: "decrease",
    dayRange: "$676.00 - $702.20",
    yearRange: "$204.21 - $702.20",
    marketCap: "1.73T USD",
    news: [
      { headline: "NVIDIA launches new AI products", date: "Recently Updated",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg", },
      { headline: "NVIDIA stock dips despite market recovery", date: "Recently Updated",source: "Bloomberg", imageUrl:"https://cdn.benzinga.com/files/images/story/2024/TSLAAAPL.png?width=1200&height=800&fit=crop" }
    ],
    companyInfo: {
      name: "NVIDIA Corporation",
      industry: "Technology",
      ceo: "Jensen Huang",
      symbol: "NVIDIA" ,
      description: "Nvidia Corporation is an American multinational technology company, incorporated in Delaware and based in Santa Clara, California. It is a software and fabless company which designs graphics processing units, application programming interfaces for data science and high-performance computing as well as system on a chip units for the mobile computing and automotive market. Nvidia is a dominant supplier of artificial intelligence hardware and software. Its professional line of GPUs are used in workstations for applications in such fields as architecture, engineering and construction, media and entertainment, automotive, scientific research, and manufacturing design. In addition to GPU manufacturing, Nvidia provides an API called CUDA that allows the creation of massively parallel programs which utilize GPUs. They are deployed in supercomputing sites around the world. More recently, it has moved into the mobile computing market, where it produces Tegra mobile processors for smartphones and tablets as well as vehicle navigation and entertainment systems."
  },},

  TSLA: {
    lastPrice: 185.10,
    openPrice: 186.49,
    lowPrice: 177.11,
    change: 4.04,
    percentChange: 2.23,
    volume: "121.15M",
    date: "Recently Updated",
    stockChangeDirection: "increase",
    dayRange: "$182.68 - $189.79",
    yearRange: "$152.37 - $299.29",
    marketCap: "587.78B USD",
    news: [
      { headline: "Tesla to unveil new Model S variant", date: "05/30",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg" },
      { headline: "Tesla's European expansion faces regulatory hurdles", date: "Recently Updated", source:"Investors Business Daily", imageUrl:"https://images.mktw.net/im-43588369?width=700&height=360" }
    ],
    companyInfo: {
      name: "Tesla, Inc.",
      industry: "Automotive",
      ceo: "Elon Musk",
      symbol: "TSLA",
    }
  },
  BABA: { // Adjusted the name for consistency in JavaScript naming conventions
    lastPrice: 78.23,
    openPrice: 78.34,
    lowPrice: 75.73,
    change: 3.60,
    percentChange: 4.82,
    volume: "38.29M",
    date: "Recently Updated",
    stockChangeDirection: "increase",
    dayRange: "$73.15 - $76.17",
    yearRange: "$66.63 - $109.81",
    marketCap: "187.30B USD",
    news: [
      { headline: "Alibaba exceeds earnings expectations", date: "Recently Updated",source: "Bloomberg", imageUrl:"https://cdn.benzinga.com/files/images/story/2024/TSLAAAPL.png?width=1200&height=800&fit=crop" },
      { headline: "Alibaba invests in logistics to boost efficiency", date: "06/03", source:"Forbes", imageUrl: "https://www.marketwatch.com/story/stock-market-investors-fear-a-megacap-meltdown-heres-what-history-says-f22744af" }
    ],
    companyInfo: {
      name: "Alibaba Group Holding Limited",
      industry: "E-commerce",
      ceo: "Daniel Zhang",
      symbol: "BABA",
      description: "Alibaba Group Holding Limited, or Alibaba, is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology. Founded on 28 June 1999 in Hangzhou, Zhejiang, the company provides consumer-to-consumer, business-to-consumer, and business-to-business sales services via Chinese and global marketplaces, as well as local consumer, digital media and entertainment, logistics and cloud computing services. It owns and operates a diverse portfolio of companies around the world in numerous business sectors. On 19 September 2014, Alibaba's initial public offering on the New York Stock Exchange raised US$25 billion, giving the company a market value of US$231 billion and, by far, then the largest IPO in world history. It is one of the top 10 most valuable corporations, and is named the 31st-largest public company in the world on the Forbes Global 2000 2020 list. In January 2018, Alibaba became the second Asian company to break the US$500 billion valuation mark, after its competitor Tencent. As of 2022, Alibaba has the ninth-highest global brand valuation. Alibaba is one of the world's largest retailers and e-commerce companies.",
    },
  },
  PLTR: {
    lastPrice: 21.86,
    openPrice: 22.18,
    lowPrice: 19.76,
    change: 5.14,
    percentChange: 30.74,
    volume: "416.86M",
    stockChangeDirection: "decrease",
    date: "Recently Updated",
    dayRange: "$21.38 - $23.87",
    yearRange: "$7.19 - $23.87",
    marketCap: "51.33B USD",
    news: [
      { headline: "Palantir wins government contract, shares soar", date: "Recently Updated",source: "Benzinga", imageUrl:"https://www.investors.com/wp-content/uploads/2024/01/Stock-BullRun-AI-adobe.jpg" },
      { headline: "Analysts divided on Palantir's future", date: "Recently Updated",source: "Benzinga",imageUrl: "https://www.marketwatch.com/story/stock-market-investors-fear-a-megacap-meltdown-heres-what-history-says-f22744af" }
    ],
    companyInfo: {
      name: "Palantir Technologies Inc.",
      industry: "Software",
      ceo: "Alexander Karp",
      symbol: "PLTR",
      description: "Palantir Technologies is a public American company that specializes in software platforms for big data analytics. Headquartered in Denver, Colorado, it was founded by Peter Thiel, Nathan Gettings, Joe Lonsdale, Stephen Cohen, and Alex Karp in 2003. The company's name is derived from The Lord of the Rings where the magical palantíri were , described as indestructible balls of crystal used for communication and to see events in other parts of the world. The company is known for three projects in particular: Palantir Gotham, Palantir Apollo, and Palantir Foundry. Palantir Gotham is used by counter-terrorism analysts at offices in the United States Intelligence Community and United States Department of Defense. In the past, Gotham was used by fraud investigators at the Recovery Accountability and Transparency Board, a former US federal agency which operated from 2009 to 2015. Gotham was also used by cyber analysts at Information Warfare Monitor, a Canadian public-private venture which operated from 2003 to 2012. Palantir Apollo is a platform to facilitate continuous integration/continuous delivery across all environments. "
    }
  },
  
}];