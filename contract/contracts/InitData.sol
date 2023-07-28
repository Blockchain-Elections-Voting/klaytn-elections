// SPDX-License-Identifier: GPL-3.0
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

abstract contract InitData {

    struct Image {
        string name;
        string avatar;
        string description;
        uint256 amountVote;
    }

    mapping(uint256 => address) public artistId;
    mapping(uint256 => Image) public imageId;

    string public baseURI;

    /**
     * Dummy data for event
     * In the future, we can accept the same from construction,
     * which will be called at the time of deployment
     */
    function _initializeData() internal {

        imageId[1] = Image({
            name: "Bill Gates",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x1.jpg")) : "",
            description: "Gates is one of the most famous entrepreneurs of the personal computer revolution . Despite his many admirers, many of his competitors have criticized his business tactics, which they consider unfair or monopolistic competition, and his company has suffered a number of lawsuits. lawsuit, litigation. [9] [10] Near the end of his career, Gates pursued a number of philanthropic endeavors, donating and donating large sums of money to charities and scientific research through the Bill & Melinda Gates , was founded in 2000 .",
            amountVote: 0
        });
        artistId[1] = 0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898;

        imageId[2] = Image({
            name: "Tim Cook",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x2.jpg")) : "",
            description: "Tim Cook is the CEO of Apple and serves on its board of directors. Before being named CEO in August 2011, Tim was Apple's chief operating officer and was responsible for all of the company's worldwide sales and operations, including end-to-end management of Apple's supply chain, sales activities, and service and support in all markets and countries. He also headed Apple's Macintosh division and played a key role in the continued development of strategic reseller and supplier relationships, ensuring flexibility in response to an increasingly demanding marketplace.",
            amountVote: 0
        });
        artistId[2] = 0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256;

        imageId[3] = Image({
            name: "Mark Zuckerberg",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x3.jpg")) : "",
            description: "Mark Zuckerberg is the founder, chairman and CEO of Meta, which he originally founded as Facebook in 2004. He is responsible for setting the overall direction and product strategy for the company.",
            amountVote: 0
        });
        artistId[3] = 0xA84937C6F5f6ad83d885E977262d8d7A237D012A;

        imageId[4] = Image({
            name: "Jeff Bezos",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x4.jpg")) : "",
            description: "Jeff Bezos founded e-commerce giant Amazon in 1994 out of his Seattle garage. Bezos stepped down as CEO to become executive chairman in 2021. He owns a bit less than 10% of the company.",
            amountVote: 0
        });
        artistId[4] = 0xb28B3C557a3D0CE38CA0dDfe988ab355473C4130;

        imageId[5] = Image({
            name: "Elon Musk",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x5.jpg")) : "",
            description: "Elon Musk cofounded six companies, including electric car maker Tesla, rocket producer SpaceX and tunneling startup Boring Company. He owns about 23% of Tesla between stock and options, but has pledged more than half his shares as collateral for loans. SpaceX, founded in 2002, is worth $127 billion after a funding round in May 2022; it quadrupled its value in three years.",
            amountVote: 0
        });
        artistId[5] = 0x9C5232D1db9EAa4B87c8b8D1846A9bBC2A7AF91E;

        imageId[5] = Image({
            name: "Vitalik Buterin",
            avatar: bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, "/asset/0x5.jpg")) : "",
            description: "Vitalik Buterin is the co-creator of Ethereum, a blockchain platform for decentralized financial applications. He became the world's youngest crypto billionaire at age 27 when Ether, Ethereum's native cryptocurrency, first crossed $3,000 per coin in May 2021.",
            amountVote: 0
        });
        artistId[5] = 0x6c1D115B14c28bc2D01f95E2B30358Ae9F0Ab815;
    }
}