import React, { useEffect, useState } from "react";
import http from "axios";
import CoinCard from "../components/CoinCard";

const Browse = () => {
  // b02e2ec4-3f8b-4c98-8a0e-300f79da7615
  const [coinsArr, setcoinsArr] = useState([])

//   const getApiData = async () => {
// 		try {
// 			const response = await http.get('http://localhost:4000/api/coin/latest')
// 			console.log(response)
// 			setcoinsArr(response.data.data)
// 		} catch (error) {
// 			console.log(error)
// 			throw new Error(error)
// 		}
// 	}

	const response = {
		"data": {
			"status": {
				"timestamp": "2022-06-21T12:21:21.183Z",
				"error_code": 0,
				"error_message": null,
				"elapsed": 20,
				"credit_count": 1,
				"notice": null,
				"total_count": 9916
			},
			"data": [
				{
					"id": 1,
					"name": "Bitcoin",
					"symbol": "BTC",
					"slug": "bitcoin",
					"num_market_pairs": 9576,
					"date_added": "2013-04-28T00:00:00.000Z",
					"tags": [
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
						"paradigm-portfolio"
					],
					"max_supply": 21000000,
					"circulating_supply": 19073231,
					"total_supply": 19073231,
					"platform": null,
					"cmc_rank": 1,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:20:00.000Z",
					"quote": {
						"USD": {
							"price": 21042.59404065192,
							"volume_24h": 31062511054.748302,
							"volume_change_24h": -10.8869,
							"percent_change_1h": -0.95433632,
							"percent_change_24h": 2.14941489,
							"percent_change_7d": -4.02048183,
							"percent_change_30d": -29.81093896,
							"percent_change_60d": -48.08760735,
							"percent_change_90d": -49.87959085,
							"market_cap": 401350256976.57745,
							"market_cap_dominance": 43.5896,
							"fully_diluted_market_cap": 441894474853.69,
							"tvl": null,
							"last_updated": "2022-06-21T12:20:00.000Z"
						}
					}
				},
				{
					"id": 1027,
					"name": "Ethereum",
					"symbol": "ETH",
					"slug": "ethereum",
					"num_market_pairs": 5763,
					"date_added": "2015-08-07T00:00:00.000Z",
					"tags": [
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
						"bnb-chain"
					],
					"max_supply": null,
					"circulating_supply": 121253547.999,
					"total_supply": 121253547.999,
					"platform": null,
					"cmc_rank": 2,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 1145.8520274409157,
							"volume_24h": 17697011994.695526,
							"volume_change_24h": -19,
							"percent_change_1h": -1.17124905,
							"percent_change_24h": 0.73326619,
							"percent_change_7d": -1.92129168,
							"percent_change_30d": -43.30967829,
							"percent_change_60d": -61.95555402,
							"percent_change_90d": -61.12383809,
							"market_cap": 138938623809.05853,
							"market_cap_dominance": 15.1162,
							"fully_diluted_market_cap": 138938623809.06,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 825,
					"name": "Tether",
					"symbol": "USDT",
					"slug": "tether",
					"num_market_pairs": 34913,
					"date_added": "2015-02-25T00:00:00.000Z",
					"tags": [
						"payments",
						"stablecoin",
						"asset-backed-stablecoin",
						"avalanche-ecosystem",
						"solana-ecosystem",
						"arbitrum-ecosytem",
						"moonriver-ecosystem",
						"injective-ecosystem",
						"bnb-chain",
						"usd-stablecoin"
					],
					"max_supply": null,
					"circulating_supply": 67495084613.29463,
					"total_supply": 68610622658.02087,
					"platform": {
						"id": 1027,
						"name": "Ethereum",
						"symbol": "ETH",
						"slug": "ethereum",
						"token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
					},
					"cmc_rank": 3,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 0.9990514183222866,
							"volume_24h": 52700150959.160446,
							"volume_change_24h": -8.1394,
							"percent_change_1h": -0.00061375,
							"percent_change_24h": 0.02261974,
							"percent_change_7d": 0.03522491,
							"percent_change_30d": 0.02465057,
							"percent_change_60d": -0.12035511,
							"percent_change_90d": -0.13144973,
							"market_cap": 67431060012.69475,
							"market_cap_dominance": 7.3107,
							"fully_diluted_market_cap": 68545539878.47,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 3408,
					"name": "USD Coin",
					"symbol": "USDC",
					"slug": "usd-coin",
					"num_market_pairs": 4557,
					"date_added": "2018-10-08T00:00:00.000Z",
					"tags": [
						"medium-of-exchange",
						"stablecoin",
						"asset-backed-stablecoin",
						"fantom-ecosystem",
						"arbitrum-ecosytem",
						"moonriver-ecosystem",
						"bnb-chain",
						"usd-stablecoin"
					],
					"max_supply": null,
					"circulating_supply": 55719126146.583885,
					"total_supply": 55719126146.583885,
					"platform": {
						"id": 1027,
						"name": "Ethereum",
						"symbol": "ETH",
						"slug": "ethereum",
						"token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
					},
					"cmc_rank": 4,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 1.0003098320815333,
							"volume_24h": 5170468780.393452,
							"volume_change_24h": -9.4682,
							"percent_change_1h": 0.01154465,
							"percent_change_24h": 0.01405054,
							"percent_change_7d": 0.00712359,
							"percent_change_30d": 0.00735229,
							"percent_change_60d": 0.02513456,
							"percent_change_90d": 0.02708851,
							"market_cap": 55736389719.4191,
							"market_cap_dominance": 6.0534,
							"fully_diluted_market_cap": 55736389719.42,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 1839,
					"name": "BNB",
					"symbol": "BNB",
					"slug": "bnb",
					"num_market_pairs": 970,
					"date_added": "2017-07-25T00:00:00.000Z",
					"tags": [
						"marketplace",
						"centralized-exchange",
						"payments",
						"smart-contracts",
						"alameda-research-portfolio",
						"multicoin-capital-portfolio",
						"moonriver-ecosystem",
						"bnb-chain"
					],
					"max_supply": 165116760,
					"circulating_supply": 163276974.63,
					"total_supply": 163276974.63,
					"platform": null,
					"cmc_rank": 5,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 220.88534298759015,
							"volume_24h": 1211476381.082662,
							"volume_change_24h": -6.774,
							"percent_change_1h": -0.76164463,
							"percent_change_24h": 3.61968277,
							"percent_change_7d": 0.75262613,
							"percent_change_30d": -30.55150193,
							"percent_change_60d": -46.35311889,
							"percent_change_90d": -44.86137251,
							"market_cap": 36065490543.123604,
							"market_cap_dominance": 3.912,
							"fully_diluted_market_cap": 36471872165.6,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 4687,
					"name": "Binance USD",
					"symbol": "BUSD",
					"slug": "binance-usd",
					"num_market_pairs": 3862,
					"date_added": "2019-09-20T00:00:00.000Z",
					"tags": [
						"stablecoin",
						"asset-backed-stablecoin",
						"binance-chain",
						"harmony-ecosystem",
						"moonriver-ecosystem",
						"bnb-chain",
						"usd-stablecoin"
					],
					"max_supply": null,
					"circulating_supply": 17164661799.649256,
					"total_supply": 17164661799.649256,
					"platform": {
						"id": 1839,
						"name": "BNB",
						"symbol": "BNB",
						"slug": "bnb",
						"token_address": "BUSD-BD1"
					},
					"cmc_rank": 6,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:20:00.000Z",
					"quote": {
						"USD": {
							"price": 1.001826664820476,
							"volume_24h": 4968017827.460107,
							"volume_change_24h": -4.6396,
							"percent_change_1h": 0.17261806,
							"percent_change_24h": 0.19203003,
							"percent_change_7d": 0.22294067,
							"percent_change_30d": 0.10259039,
							"percent_change_60d": 0.06260365,
							"percent_change_90d": 0.13743585,
							"market_cap": 17196015883.514046,
							"market_cap_dominance": 1.8676,
							"fully_diluted_market_cap": 17196015883.51,
							"tvl": null,
							"last_updated": "2022-06-21T12:20:00.000Z"
						}
					}
				},
				{
					"id": 2010,
					"name": "Cardano",
					"symbol": "ADA",
					"slug": "cardano",
					"num_market_pairs": 460,
					"date_added": "2017-10-01T00:00:00.000Z",
					"tags": [
						"mineable",
						"dpos",
						"pos",
						"platform",
						"research",
						"smart-contracts",
						"staking",
						"cardano-ecosystem",
						"cardano",
						"bnb-chain"
					],
					"max_supply": 45000000000,
					"circulating_supply": 33739028515.755,
					"total_supply": 34512850428.993,
					"platform": null,
					"cmc_rank": 7,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 0.4974555541342032,
							"volume_24h": 976037011.7393639,
							"volume_change_24h": -14.3412,
							"percent_change_1h": -1.81297023,
							"percent_change_24h": 0.22649359,
							"percent_change_7d": 2.27029223,
							"percent_change_30d": -8.50416314,
							"percent_change_60d": -45.83295343,
							"percent_change_90d": -49.01528536,
							"market_cap": 16783667126.25459,
							"market_cap_dominance": 1.8228,
							"fully_diluted_market_cap": 22385499936.04,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 52,
					"name": "XRP",
					"symbol": "XRP",
					"slug": "xrp",
					"num_market_pairs": 741,
					"date_added": "2013-08-04T00:00:00.000Z",
					"tags": [
						"medium-of-exchange",
						"enterprise-solutions",
						"binance-chain",
						"arrington-xrp-capital-portfolio",
						"galaxy-digital-portfolio",
						"a16z-portfolio",
						"pantera-capital-portfolio"
					],
					"max_supply": 100000000000,
					"circulating_supply": 48343101197,
					"total_supply": 99989535142,
					"platform": null,
					"cmc_rank": 8,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:20:00.000Z",
					"quote": {
						"USD": {
							"price": 0.3280132266054224,
							"volume_24h": 1206810196.72609,
							"volume_change_24h": -5.26,
							"percent_change_1h": -0.77535248,
							"percent_change_24h": 1.29565535,
							"percent_change_7d": 5.70268829,
							"percent_change_30d": -21.69828976,
							"percent_change_60d": -54.74118428,
							"percent_change_90d": -60.10003372,
							"market_cap": 15857176607.740429,
							"market_cap_dominance": 1.72,
							"fully_diluted_market_cap": 32801322660.54,
							"tvl": null,
							"last_updated": "2022-06-21T12:20:00.000Z"
						}
					}
				},
				{
					"id": 5426,
					"name": "Solana",
					"symbol": "SOL",
					"slug": "solana",
					"num_market_pairs": 335,
					"date_added": "2020-04-10T00:00:00.000Z",
					"tags": [
						"pos",
						"platform",
						"solana-ecosystem",
						"cms-holdings-portfolio",
						"kenetic-capital-portfolio",
						"alameda-research-portfolio",
						"multicoin-capital-portfolio",
						"okex-blockdream-ventures-portfolio"
					],
					"max_supply": null,
					"circulating_supply": 342509036.74377805,
					"total_supply": 511616946.142289,
					"platform": null,
					"cmc_rank": 9,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:19:00.000Z",
					"quote": {
						"USD": {
							"price": 37.36392838302544,
							"volume_24h": 1957211434.002613,
							"volume_change_24h": -1.201,
							"percent_change_1h": -1.08473558,
							"percent_change_24h": 4.94361996,
							"percent_change_7d": 30.14561259,
							"percent_change_30d": -27.55923355,
							"percent_change_60d": -63.41608453,
							"percent_change_90d": -59.00736847,
							"market_cap": 12797483119.433552,
							"market_cap_dominance": 1.3881,
							"fully_diluted_market_cap": 19116018935.2,
							"tvl": null,
							"last_updated": "2022-06-21T12:19:00.000Z"
						}
					}
				},
				{
					"id": 74,
					"name": "Dogecoin",
					"symbol": "DOGE",
					"slug": "dogecoin",
					"num_market_pairs": 487,
					"date_added": "2013-12-15T00:00:00.000Z",
					"tags": [
						"mineable",
						"pow",
						"scrypt",
						"medium-of-exchange",
						"memes",
						"payments",
						"doggone-doggerel",
						"bnb-chain"
					],
					"max_supply": null,
					"circulating_supply": 132670764299.89409,
					"total_supply": 132670764299.89409,
					"platform": null,
					"cmc_rank": 10,
					"self_reported_circulating_supply": null,
					"self_reported_market_cap": null,
					"tvl_ratio": null,
					"last_updated": "2022-06-21T12:20:00.000Z",
					"quote": {
						"USD": {
							"price": 0.06406999878148383,
							"volume_24h": 691038263.4257251,
							"volume_change_24h": -4.2334,
							"percent_change_1h": -1.26970706,
							"percent_change_24h": 6.68986295,
							"percent_change_7d": 16.13256845,
							"percent_change_30d": -25.3407851,
							"percent_change_60d": -53.24906593,
							"percent_change_90d": -47.49722982,
							"market_cap": 8500215707.0327425,
							"market_cap_dominance": 0.9232,
							"fully_diluted_market_cap": 8500215707.03,
							"tvl": null,
							"last_updated": "2022-06-21T12:20:00.000Z"
						}
					}
				}
			]
		},
		"status": 200,
		"statusText": "OK",
		"headers": {
			"content-length": "11415",
			"content-type": "application/json; charset=utf-8"
		},
		"config": {
			"transitional": {
				"silentJSONParsing": true,
				"forcedJSONParsing": true,
				"clarifyTimeoutError": false
			},
			"transformRequest": [
				null
			],
			"transformResponse": [
				null
			],
			"timeout": 0,
			"xsrfCookieName": "XSRF-TOKEN",
			"xsrfHeaderName": "X-XSRF-TOKEN",
			"maxContentLength": -1,
			"maxBodyLength": -1,
			"env": {
				"FormData": null
			},
			"headers": {
				"Accept": "application/json, text/plain, */*"
			},
			"method": "get",
			"url": "http://localhost:4000/api/coin/latest"
		},
		"request": {}
	}

	useEffect(() => {
		// getApiData()
		setcoinsArr(response.data.data)
	}, [])
	// console.log(coinsArr)
  return (
    <div className="top-wrapper">
      <div>Browse Coins</div>
	  <h1>Top 10 popular coins</h1>
	  <div className="card-container">
	  	{coinsArr.map((coinData, index) => <CoinCard key={index} coinData={coinData} />)}
	  </div>

    </div>
  );
};

export default Browse;
