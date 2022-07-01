import React, { useEffect, useState } from "react";
import http from "axios";
import CoinCard from "../components/CoinCard";

const Browse = () => {
  // b02e2ec4-3f8b-4c98-8a0e-300f79da7615
  const [coinsArr, setcoinsArr] = useState([]);

  // const getApiData = async () => {
  //   try {
  //     const response = await http.get("http://localhost:4000/api/coin/latest");
  //     console.log(response);
  //     setcoinsArr(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //     throw new Error(error);
  //   }
  // };

  const response = {
    data: {
      status: {
        timestamp: "2022-06-27T17:20:59.320Z",
        error_code: 0,
        error_message: null,
        elapsed: 20,
        credit_count: 1,
        notice: null,
        total_count: 9959,
      },
      data: [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          num_market_pairs: 9588,
          date_added: "2013-04-28T00:00:00.000Z",
          tags: [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
          ],
          max_supply: 21000000,
          circulating_supply: 19078587,
          total_supply: 19078587,
          platform: null,
          cmc_rank: 1,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 20761.569315495435,
              volume_24h: 20308948639.82265,
              volume_change_24h: 19.1181,
              percent_change_1h: 0.27391112,
              percent_change_24h: -2.62406265,
              percent_change_7d: 2.07188762,
              percent_change_30d: -28.04559206,
              percent_change_60d: -48.02256844,
              percent_change_90d: -56.18577041,
              market_cap: 396101406442.2101,
              market_cap_dominance: 42.3676,
              fully_diluted_market_cap: 435992955625.4,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
        {
          id: 1027,
          name: "Ethereum",
          symbol: "ETH",
          slug: "ethereum",
          num_market_pairs: 5786,
          date_added: "2015-08-07T00:00:00.000Z",
          tags: [
            "mineable",
            "pow",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "injective-ecosystem",
            "bnb-chain",
          ],
          max_supply: null,
          circulating_supply: 121322281.4365,
          total_supply: 121322281.4365,
          platform: null,
          cmc_rank: 2,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 1189.487757347734,
              volume_24h: 12480937736.33607,
              volume_change_24h: 4.2582,
              percent_change_1h: 0.35285294,
              percent_change_24h: -2.94987977,
              percent_change_7d: 6.99279518,
              percent_change_30d: -32.71410569,
              percent_change_60d: -59.4815718,
              percent_change_90d: -65.11337032,
              market_cap: 144311368462.213,
              market_cap_dominance: 15.4509,
              fully_diluted_market_cap: 144311368462.21,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 825,
          name: "Tether",
          symbol: "USDT",
          slug: "tether",
          num_market_pairs: 35220,
          date_added: "2015-02-25T00:00:00.000Z",
          tags: [
            "payments",
            "stablecoin",
            "asset-backed-stablecoin",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 66867260244.086044,
          total_supply: 68610622656.74227,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
          },
          cmc_rank: 3,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.9990052168125618,
              volume_24h: 38440304066.10634,
              volume_change_24h: 10.5762,
              percent_change_1h: -0.01281336,
              percent_change_24h: -0.05024411,
              percent_change_7d: 0.01198534,
              percent_change_30d: -0.00392245,
              percent_change_60d: -0.11358427,
              percent_change_90d: -0.16163824,
              market_cap: 66800741817.805176,
              market_cap_dominance: 7.1521,
              fully_diluted_market_cap: 68542369962.84,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 3408,
          name: "USD Coin",
          symbol: "USDC",
          slug: "usd-coin",
          num_market_pairs: 4660,
          date_added: "2018-10-08T00:00:00.000Z",
          tags: [
            "medium-of-exchange",
            "stablecoin",
            "asset-backed-stablecoin",
            "fantom-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 55802605112.71548,
          total_supply: 55802605112.71548,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          },
          cmc_rank: 4,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 1.0003204817999132,
              volume_24h: 3923684284.490388,
              volume_change_24h: 25.7739,
              percent_change_1h: 0.01411616,
              percent_change_24h: 0.03123928,
              percent_change_7d: -0.00434,
              percent_change_30d: 0.03237213,
              percent_change_60d: 0.0339543,
              percent_change_90d: 0.04261744,
              market_cap: 55820488832.04185,
              market_cap_dominance: 5.9765,
              fully_diluted_market_cap: 55820488832.04,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 1839,
          name: "BNB",
          symbol: "BNB",
          slug: "bnb",
          num_market_pairs: 981,
          date_added: "2017-07-25T00:00:00.000Z",
          tags: [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "moonriver-ecosystem",
            "bnb-chain",
          ],
          max_supply: 165116760,
          circulating_supply: 163276974.63,
          total_supply: 163276974.63,
          platform: null,
          cmc_rank: 5,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 234.44292113745115,
              volume_24h: 857523886.3542914,
              volume_change_24h: 6.7544,
              percent_change_1h: 0.35663843,
              percent_change_24h: -2.03221252,
              percent_change_7d: 9.02594879,
              percent_change_30d: -23.36203664,
              percent_change_60d: -42.14688297,
              percent_change_90d: -45.8437255,
              market_cap: 38279130886.7427,
              market_cap_dominance: 4.0984,
              fully_diluted_market_cap: 38710455543.15,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 4687,
          name: "Binance USD",
          symbol: "BUSD",
          slug: "binance-usd",
          num_market_pairs: 3921,
          date_added: "2019-09-20T00:00:00.000Z",
          tags: [
            "stablecoin",
            "asset-backed-stablecoin",
            "binance-chain",
            "harmony-ecosystem",
            "moonriver-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 17389381277.559254,
          total_supply: 17389381277.559254,
          platform: {
            id: 1839,
            name: "BNB",
            symbol: "BNB",
            slug: "bnb",
            token_address: "BUSD-BD1",
          },
          cmc_rank: 6,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 1.0011163739236093,
              volume_24h: 4499085986.160983,
              volume_change_24h: 38.9458,
              percent_change_1h: 0.00496144,
              percent_change_24h: -0.02226223,
              percent_change_7d: -0.00017854,
              percent_change_30d: 0.11521281,
              percent_change_60d: 0.1519704,
              percent_change_90d: 0.27649775,
              market_cap: 17408794329.36522,
              market_cap_dominance: 1.8621,
              fully_diluted_market_cap: 17408794329.37,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
        {
          id: 52,
          name: "XRP",
          symbol: "XRP",
          slug: "xrp",
          num_market_pairs: 747,
          date_added: "2013-08-04T00:00:00.000Z",
          tags: [
            "medium-of-exchange",
            "enterprise-solutions",
            "binance-chain",
            "arrington-xrp-capital-portfolio",
            "galaxy-digital-portfolio",
            "a16z-portfolio",
            "pantera-capital-portfolio",
          ],
          max_supply: 100000000000,
          circulating_supply: 48343101197,
          total_supply: 99989535142,
          platform: null,
          cmc_rank: 7,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 0.35323664992099657,
              volume_24h: 971367132.4070953,
              volume_change_24h: 24.5351,
              percent_change_1h: 0.21538097,
              percent_change_24h: -3.25602265,
              percent_change_7d: 9.42214939,
              percent_change_30d: -8.47557036,
              percent_change_60d: -45.21067604,
              percent_change_90d: -58.8423013,
              market_cap: 17076555113.619999,
              market_cap_dominance: 1.8265,
              fully_diluted_market_cap: 35323664992.1,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
        {
          id: 2010,
          name: "Cardano",
          symbol: "ADA",
          slug: "cardano",
          num_market_pairs: 466,
          date_added: "2017-10-01T00:00:00.000Z",
          tags: [
            "mineable",
            "dpos",
            "pos",
            "platform",
            "research",
            "smart-contracts",
            "staking",
            "cardano-ecosystem",
            "cardano",
            "bnb-chain",
          ],
          max_supply: 45000000000,
          circulating_supply: 33752565071.288,
          total_supply: 34277702081.605,
          platform: null,
          cmc_rank: 8,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.48768017337844455,
              volume_24h: 692168532.8974867,
              volume_change_24h: -14.0259,
              percent_change_1h: -0.71825295,
              percent_change_24h: -4.42268263,
              percent_change_7d: -0.46986781,
              percent_change_30d: 5.61368876,
              percent_change_60d: -42.10535529,
              percent_change_90d: -58.9761749,
              market_cap: 16460456785.932962,
              market_cap_dominance: 1.7624,
              fully_diluted_market_cap: 21945607802.03,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 5426,
          name: "Solana",
          symbol: "SOL",
          slug: "solana",
          num_market_pairs: 340,
          date_added: "2020-04-10T00:00:00.000Z",
          tags: [
            "pos",
            "platform",
            "solana-ecosystem",
            "cms-holdings-portfolio",
            "kenetic-capital-portfolio",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "okex-blockdream-ventures-portfolio",
          ],
          max_supply: null,
          circulating_supply: 342768321.94534975,
          total_supply: 511616946.142289,
          platform: null,
          cmc_rank: 9,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 38.692139221880275,
              volume_24h: 1280204030.472922,
              volume_change_24h: 15.2579,
              percent_change_1h: 0.28071464,
              percent_change_24h: -4.81346286,
              percent_change_7d: 11.66543004,
              percent_change_30d: -9.54773833,
              percent_change_60d: -60.89255864,
              percent_change_90d: -65.10903159,
              market_cap: 13262439633.559753,
              market_cap_dominance: 1.4186,
              fully_diluted_market_cap: 19795554108.41,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 74,
          name: "Dogecoin",
          symbol: "DOGE",
          slug: "dogecoin",
          num_market_pairs: 491,
          date_added: "2013-12-15T00:00:00.000Z",
          tags: [
            "mineable",
            "pow",
            "scrypt",
            "medium-of-exchange",
            "memes",
            "payments",
            "doggone-doggerel",
            "bnb-chain",
          ],
          max_supply: null,
          circulating_supply: 132670764299.89409,
          total_supply: 132670764299.89409,
          platform: null,
          cmc_rank: 10,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 0.07219802224687435,
              volume_24h: 1070789702.8499898,
              volume_change_24h: 46.8271,
              percent_change_1h: 1.05235264,
              percent_change_24h: -2.30855623,
              percent_change_7d: 21.06939613,
              percent_change_30d: -12.02274726,
              percent_change_60d: -47.8538872,
              percent_change_90d: -49.88364719,
              market_cap: 9578566792.433577,
              market_cap_dominance: 1.0245,
              fully_diluted_market_cap: 9578566792.43,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
        {
          id: 6636,
          name: "Polkadot",
          symbol: "DOT",
          slug: "polkadot-new",
          num_market_pairs: 358,
          date_added: "2020-08-19T00:00:00.000Z",
          tags: [
            "substrate",
            "polkadot",
            "binance-chain",
            "polkadot-ecosystem",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "arrington-xrp-capital-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "coinfund-portfolio",
            "fabric-ventures-portfolio",
            "fenbushi-capital-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "1confirmation-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "exnetwork-capital-portfolio",
            "web3",
            "spartan-group",
            "injective-ecosystem",
            "bnb-chain",
          ],
          max_supply: null,
          circulating_supply: 987579314.957085,
          total_supply: 1103303471.382273,
          platform: null,
          cmc_rank: 11,
          self_reported_circulating_supply: 904869778,
          self_reported_market_cap: 7140266927.82072,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 7.890933150184976,
              volume_24h: 371775369.8476047,
              volume_change_24h: 5.0378,
              percent_change_1h: 0.00829486,
              percent_change_24h: -2.57350553,
              percent_change_7d: 1.30949066,
              percent_change_30d: -16.21025477,
              percent_change_60d: -53.74035171,
              percent_change_90d: -64.49365014,
              market_cap: 7792922354.831831,
              market_cap_dominance: 0.834,
              fully_diluted_market_cap: 8706093937.04,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
        {
          id: 4943,
          name: "Dai",
          symbol: "DAI",
          slug: "multi-collateral-dai",
          num_market_pairs: 1013,
          date_added: "2019-11-22T00:00:00.000Z",
          tags: [
            "defi",
            "stablecoin",
            "ethereum-ecosystem",
            "avalanche-ecosystem",
            "polygon-ecosystem",
            "fantom-ecosystem",
            "arbitrum-ecosytem",
            "harmony-ecosystem",
            "moonriver-ecosystem",
            "bnb-chain",
            "usd-stablecoin",
          ],
          max_supply: null,
          circulating_supply: 6766268428.633776,
          total_supply: 6766268428.633776,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          },
          cmc_rank: 12,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.9996850160447289,
              volume_24h: 253596174.43585822,
              volume_change_24h: 10.2629,
              percent_change_1h: -0.00895097,
              percent_change_24h: -0.03161153,
              percent_change_7d: -0.04096961,
              percent_change_30d: 0.04305501,
              percent_change_60d: -0.03491952,
              percent_change_90d: 0.0557824,
              market_cap: 6764137162.641699,
              market_cap_dominance: 0.7235,
              fully_diluted_market_cap: 6764137162.64,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 1958,
          name: "TRON",
          symbol: "TRX",
          slug: "tron",
          num_market_pairs: 647,
          date_added: "2017-09-13T00:00:00.000Z",
          tags: ["media", "payments", "tron-ecosystem", "bnb-chain"],
          max_supply: null,
          circulating_supply: 92497237633.70468,
          total_supply: 92497263026.2478,
          platform: null,
          cmc_rank: 13,
          self_reported_circulating_supply: 71659659264,
          self_reported_market_cap: 4844271235.368792,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.06760109223408534,
              volume_24h: 758270053.8498286,
              volume_change_24h: 94.5982,
              percent_change_1h: -0.28657196,
              percent_change_24h: 4.86136239,
              percent_change_7d: 10.48700821,
              percent_change_30d: -17.47907246,
              percent_change_60d: 6.56712349,
              percent_change_90d: -3.22208274,
              market_cap: 6252914292.674179,
              market_cap_dominance: 0.6695,
              fully_diluted_market_cap: 6252916009.24,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 5994,
          name: "Shiba Inu",
          symbol: "SHIB",
          slug: "shiba-inu",
          num_market_pairs: 369,
          date_added: "2020-08-01T00:00:00.000Z",
          tags: ["memes", "ethereum-ecosystem", "doggone-doggerel"],
          max_supply: null,
          circulating_supply: 549063278876301.94,
          total_supply: 589735030408322.8,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
          },
          cmc_rank: 14,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.000011017024110863401,
              volume_24h: 602534752.145978,
              volume_change_24h: -11.3037,
              percent_change_1h: 0.00724057,
              percent_change_24h: -5.06047203,
              percent_change_7d: 35.82960096,
              percent_change_30d: 2.85310308,
              percent_change_60d: -52.31390181,
              percent_change_90d: -59.13415658,
              market_cap: 6049043381.769934,
              market_cap_dominance: 0.6476,
              fully_diluted_market_cap: 6497125049.03,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 3957,
          name: "UNUS SED LEO",
          symbol: "LEO",
          slug: "unus-sed-leo",
          num_market_pairs: 19,
          date_added: "2019-05-21T00:00:00.000Z",
          tags: [
            "marketplace",
            "centralized-exchange",
            "discount-token",
            "payments",
            "kenetic-capital-portfolio",
            "alameda-research-portfolio",
          ],
          max_supply: null,
          circulating_supply: 953954130,
          total_supply: 985239504,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
          },
          cmc_rank: 15,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 5.910713766157333,
              volume_24h: 6980718.34418308,
              volume_change_24h: 2.6531,
              percent_change_1h: -0.49197672,
              percent_change_24h: 0.06377293,
              percent_change_7d: 9.41486203,
              percent_change_30d: 17.01740864,
              percent_change_60d: 2.60026788,
              percent_change_90d: -1.42460369,
              market_cap: 5638549808.473641,
              market_cap_dominance: 0.6037,
              fully_diluted_market_cap: 5823468699.25,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 5805,
          name: "Avalanche",
          symbol: "AVAX",
          slug: "avalanche",
          num_market_pairs: 271,
          date_added: "2020-07-13T00:00:00.000Z",
          tags: [
            "defi",
            "smart-contracts",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "avalanche-ecosystem",
            "cms-holdings-portfolio",
            "dragonfly-capital-portfolio",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
          ],
          max_supply: 720000000,
          circulating_supply: 281933998.94724214,
          total_supply: 404229626.49901325,
          platform: null,
          cmc_rank: 16,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 19.889526888225785,
              volume_24h: 435410506.67579424,
              volume_change_24h: 3.9424,
              percent_change_1h: -0.00616562,
              percent_change_24h: -4.60420757,
              percent_change_7d: 16.12156436,
              percent_change_30d: -17.51923069,
              percent_change_60d: -70.83679791,
              percent_change_90d: -78.63477551,
              market_cap: 5607533852.766192,
              market_cap_dominance: 0.6004,
              fully_diluted_market_cap: 14320459359.52,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 3717,
          name: "Wrapped Bitcoin",
          symbol: "WBTC",
          slug: "wrapped-bitcoin",
          num_market_pairs: 466,
          date_added: "2019-01-30T00:00:00.000Z",
          tags: [
            "medium-of-exchange",
            "defi",
            "wrapped-tokens",
            "fantom-ecosystem",
            "arbitrum-ecosytem",
            "moonriver-ecosystem",
          ],
          max_supply: null,
          circulating_supply: 265028.72002186,
          total_supply: 265028.72002186,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          },
          cmc_rank: 17,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 20724.51045657186,
              volume_24h: 143572305.9370689,
              volume_change_24h: -23.9817,
              percent_change_1h: 0.03413918,
              percent_change_24h: -2.76033461,
              percent_change_7d: 2.0715576,
              percent_change_30d: -28.13423458,
              percent_change_60d: -48.06033133,
              percent_change_90d: -56.35027302,
              market_cap: 5492590479.384893,
              market_cap_dominance: 0.5881,
              fully_diluted_market_cap: 5492590479.38,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 3890,
          name: "Polygon",
          symbol: "MATIC",
          slug: "polygon",
          num_market_pairs: 407,
          date_added: "2019-04-28T00:00:00.000Z",
          tags: [
            "platform",
            "enterprise-solutions",
            "scaling",
            "state-channel",
            "coinbase-ventures-portfolio",
            "binance-launchpad",
            "binance-labs-portfolio",
            "polygon-ecosystem",
            "moonriver-ecosystem",
            "injective-ecosystem",
            "bnb-chain",
          ],
          max_supply: 10000000000,
          circulating_supply: 8001489374.62,
          total_supply: 10000000000,
          platform: null,
          cmc_rank: 18,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 0.5335148191158552,
              volume_24h: 552709856.9066643,
              volume_change_24h: 24.6899,
              percent_change_1h: -0.18579158,
              percent_change_24h: -10.07606901,
              percent_change_7d: 34.34340528,
              percent_change_30d: -9.36593793,
              percent_change_60d: -57.47079098,
              percent_change_90d: -68.20661138,
              market_cap: 4268913156.3578267,
              market_cap_dominance: 0.4569,
              fully_diluted_market_cap: 5335148191.16,
              tvl: null,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 7083,
          name: "Uniswap",
          symbol: "UNI",
          slug: "uniswap",
          num_market_pairs: 381,
          date_added: "2020-09-17T00:00:00.000Z",
          tags: [
            "decentralized-exchange",
            "defi",
            "dao",
            "yield-farming",
            "amm",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "governance",
            "blockchain-capital-portfolio",
            "defiance-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "pantera-capital-portfolio",
            "parafi-capital",
            "paradigm-portfolio",
            "arbitrum-ecosytem",
            "injective-ecosystem",
            "bnb-chain",
          ],
          max_supply: 1000000000,
          circulating_supply: 734133449.9999107,
          total_supply: 1000000000,
          platform: {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            token_address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
          },
          cmc_rank: 19,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: 0.76814134,
          last_updated: "2022-06-27T17:15:00.000Z",
          quote: {
            USD: {
              price: 5.4496144524538686,
              volume_24h: 148411790.36853078,
              volume_change_24h: 24.3531,
              percent_change_1h: 0.51551432,
              percent_change_24h: -4.12002584,
              percent_change_7d: 29.33082861,
              percent_change_30d: 11.43930529,
              percent_change_60d: -33.41321316,
              percent_change_90d: -51.9265207,
              market_cap: 4000744259.149333,
              market_cap_dominance: 0.4282,
              fully_diluted_market_cap: 5449614452.45,
              tvl: 5208343889.665146,
              last_updated: "2022-06-27T17:15:00.000Z",
            },
          },
        },
        {
          id: 2,
          name: "Litecoin",
          symbol: "LTC",
          slug: "litecoin",
          num_market_pairs: 789,
          date_added: "2013-04-28T00:00:00.000Z",
          tags: [
            "mineable",
            "pow",
            "scrypt",
            "medium-of-exchange",
            "binance-chain",
            "bnb-chain",
          ],
          max_supply: 84000000,
          circulating_supply: 70595893.77791464,
          total_supply: 84000000,
          platform: null,
          cmc_rank: 20,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          tvl_ratio: null,
          last_updated: "2022-06-27T17:16:00.000Z",
          quote: {
            USD: {
              price: 55.796150334240515,
              volume_24h: 451492232.21799046,
              volume_change_24h: -17.8577,
              percent_change_1h: -0.01647193,
              percent_change_24h: -4.55289776,
              percent_change_7d: 6.38957309,
              percent_change_30d: -11.61637606,
              percent_change_60d: -45.79168681,
              percent_change_90d: -56.64781659,
              market_cap: 3938979102.2126,
              market_cap_dominance: 0.4213,
              fully_diluted_market_cap: 4686876628.08,
              tvl: null,
              last_updated: "2022-06-27T17:16:00.000Z",
            },
          },
        },
      ],
    },
    status: 200,
    statusText: "OK",
    headers: {
      "content-length": "22414",
      "content-type": "application/json; charset=utf-8",
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
      },
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: null,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      method: "get",
      url: "http://localhost:4000/api/coin/latest",
    },
    request: {},
  };

  const [search, setSearch] = useState("");

  const searchData = coinsArr.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  const topCoinsData = coinsArr.filter(
    (element) =>
      element.name === "Shiba Inu" ||
      element.name === "Terra" ||
      element.name === "Ethereum" ||
      element.name === "Polygon" ||
      element.name === "Bitcoin" ||
      element.name === "BNB" ||
      element.name === "Solana" ||
      element.name === "BNB"
  );

  useEffect(() => {
    setcoinsArr(response.data.data)
    // getApiData();
  }, [search]);

  return (
	<>
			<div className="top">
				<div className="top-bg-img"></div>
				<div className="top-wrapper">
					<p>Browse</p>
					<h1 className="browse-header">Trending coins</h1>
					<div className="card-container">
						{topCoinsData.map((coinData, index) => (
							<CoinCard key={index} coinData={coinData} />
							))}
					</div>
				</div>
			</div>
		
		<div className="bottom">
			<div className="bottom-wrapper">
				<div id="search-img"></div>
				<input
					type="text"
					placeholder="Search for coins"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="card-container">
					{searchData.map((coinData, index) => (
					<CoinCard key={index} coinData={coinData} />
					))}
				</div>
			</div>
		</div>
	</>
  );
};

export default Browse;
