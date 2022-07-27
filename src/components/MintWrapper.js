import React,{useState,useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

import { toast } from 'react-toastify';
import MerkleTree from 'merkletreejs'
import keccak256 from 'keccak256'

import whitelistAddressesWL from '../addresses-wl.json'
import whitelistAddressesOG from '../addresses-og.json'

import loading from '../assets/loading.svg'

function MintWrapper() {

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintAmount, setMintAmount] = useState(1);
    const [paused,setPaused] = useState(null)
    const [cost,setCost] = useState(null)
    const [maxPerWallet,setMaxPerWallet]=useState(null);
    const[limit,setLimit]=useState(null)
    const[totalSupply,setTotalSupply]=useState(null)
    const[maxSupply,setMaxSupply]=useState(null)

    const[refresh,setRefresh]=useState(0)
    const[balance,setBalance]=useState(null)
    const[ogWhitelisted,setOgWhitelisted]=useState(null)
    const[wlWhitelisted,setWlWhitelisted]=useState(null)

    const[publicActive,setPublicActive]=useState(null)
    const[presaleActive,setPresaleActive]=useState(null)


    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        NETWORK: {
            NAME: "",
            SYMBOL: "",
            ID: 0,
        },
        GAS_LIMIT: 0,
    });

    const presaleMint = () => {
        if(paused===true){
            toast.info('Mint coming soon')
            return;
        }

        let whitelistAddresses=ogWhitelisted===true? whitelistAddressesOG :wlWhitelisted===true?whitelistAddressesWL:null;

        let cost2 = cost;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);


        const whiteListAddressesLeaves = whitelistAddresses.map((x) => keccak256(x))
        const merkletree = new MerkleTree(whiteListAddressesLeaves, keccak256 ,{sortPairs:true})
        const merklePoof=merkletree.getHexProof(keccak256(blockchain.account))

        toast.info(`Minting your ${mintAmount > 1 ? 'WolfBoss' : 'WolfBoss'}...`);
        setClaimingNft(true);

        let mintMethod=
            ogWhitelisted===true? 
                blockchain.smartContract.methods.ogMint
            :wlWhitelisted===true?
                blockchain.smartContract.methods.wlMint
            :null;


        mintMethod(merklePoof ,mintAmount)
        .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
        })
        .once("error", (err) => {
            console.log(err);
            toast.error("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
        })
        .then((receipt) => {
            console.log(receipt);
            toast.success(() =>
            <span>
                Wolfboss Mint Successful! Visit <a href="https://opensea.io/collection/wolfboss">opensea.io</a> to view your NFT.
            </span>
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
            setRefresh(refresh+1)
            setMintAmount(1)
        });
    };

    const publicMint = () => {
        if(paused===true){
          toast.info('Mint coming soon')
          return;
        }
  
        let cost2 = cost;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);

        toast.info(`Minting your ${mintAmount > 1 ? 'WolfBoss' : 'WolfBoss'}...`);
        setClaimingNft(true);
        
        blockchain.smartContract.methods
        .publicMint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          toast.error("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          toast.success(() =>
            <span>
              Wolfboss Mint Successful! Visit <a href="https://opensea.io/collection/wolfboss">opensea.io</a> to view your NFT.
            </span>
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
          setRefresh(refresh+1)
          setMintAmount(1)
        });
    };


    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };


    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();

    }, []);

    useEffect(() => {
        getData();

    }, [blockchain.account]);



    const initConnect=async()=>{
    
        try{

            const ogWhitelisted=isOgWhitelisted()
            const wlWhitelisted=isWlWhitelisted()
            // console.log(ogWhitelisted,wlWhitelisted)

            const ogCost=await  blockchain.smartContract.methods.ogCost().call();
            const wlCost=await  blockchain.smartContract.methods.wlCost().call();
            const publicSaleCost=await blockchain.smartContract.methods.publicSaleCost().call();
            
            const maxPerOgWallet=await blockchain.smartContract.methods.maxMintAmountPerOgAccount().call()
            const maxPerWlWallet=await blockchain.smartContract.methods.maxMintAmountPerWlAccount().call()
            const maxPerPublicSaleWallet=await blockchain.smartContract.methods.maxMintAmountPerPublicAccount().call()
            
            const presaleActive=await blockchain.smartContract.methods.presaleActive().call()
            const publicSaleActive=await blockchain.smartContract.methods.publicSaleActive().call()

            const totalSupply=await blockchain.smartContract.methods.totalSupply().call();
            const maxSupply=await blockchain.smartContract.methods.maxSupply().call();

            // console.log(presaleActive)
            if(presaleActive===true){
                
                setPresaleActive(true)
                setPublicActive(false)
                if(ogWhitelisted){
                    setCost(ogCost)
                    setMaxPerWallet(maxPerOgWallet)
                }
                else if(wlWhitelisted){
                    setCost(wlCost)
                    setMaxPerWallet(maxPerWlWallet)
                }
                else{
                    setCost(wlCost)
                    setMaxPerWallet(maxPerWlWallet)
                }
                setPaused(false)

            }
            else if(publicSaleActive===true){
                setCost(publicSaleCost)
                setMaxPerWallet(maxPerPublicSaleWallet)
                setPresaleActive(false)
                setPublicActive(true)
                setPaused(false)
            }
            else{
                setPaused(true)
            }

            setTotalSupply(Number(totalSupply))
            setMaxSupply(Number(maxSupply))
            setOgWhitelisted(ogWhitelisted)
            setWlWhitelisted(wlWhitelisted)
        }
        catch(err){
            console.log(err)
        }
    

    }

    useEffect(()=>{
        if(blockchain.smartContract===null)return;
        // console.log(blockchain.smartContract)
        initConnect()


        setInterval(()=>{
            initConnect()
        },[30000])
    },[refresh,blockchain])

    useEffect(()=>{
        if(blockchain.account===null||maxPerWallet===null||presaleActive===null||publicActive===null)return;
        // console.log('testing')
        if(presaleActive===true){
            blockchain.smartContract.methods.numberMinted(blockchain.account).call().then((result)=>{
                let limit=Number(maxPerWallet)-result;
                if(limit<=0){
                  setLimit(0)
                }
                else{
                  setLimit(limit)
                }
            })
        }
        else if(publicActive===true){
            blockchain.smartContract.methods.getPublicAmountMinted(blockchain.account).call().then((result)=>{
                let limit=Number(maxPerWallet)-result;
                if(limit<=0){
                  setLimit(0)
                }
                else{
                  setLimit(limit)
                }
            })
        }
    
      },[refresh,blockchain.smartContract,maxPerWallet,presaleActive,publicActive])

    const isOgWhitelisted=()=>{

        const whiteListAddressesLeaves = whitelistAddressesOG.map((x) => keccak256(x));
        const merkletree = new MerkleTree(whiteListAddressesLeaves, keccak256 ,{sortPairs:true})
        const merklePoof=merkletree.getHexProof(keccak256(blockchain.account));
        const rootNode=merkletree.getRoot().toString('hex');
        let whitelisted=merkletree.verify(merklePoof,keccak256(blockchain.account),rootNode)
    
        //we check for totalSupply to check if the values have been retrieved
        // if(whitelisted===false&&presaleActive!==null){
        //   setWlWhitelisted(false)
        // }
        // else if(presaleActive!==null){
        //   setWlWhitelisted(true)
        // }
        return whitelisted
    }

    const isWlWhitelisted=()=>{

        const whiteListAddressesLeaves = whitelistAddressesWL.map((x) => keccak256(x));
        const merkletree = new MerkleTree(whiteListAddressesLeaves, keccak256 ,{sortPairs:true})
        const merklePoof=merkletree.getHexProof(keccak256(blockchain.account));
        const rootNode=merkletree.getRoot().toString('hex');
        let whitelisted=merkletree.verify(merklePoof,keccak256(blockchain.account),rootNode)
    
        // if(whitelisted===false&&presaleActive!==null){
        //     setOgWhitelisted(false)
        // }
        // else if(presaleActive!==null){
        //     setOgWhitelisted(true)
        // }
        return whitelisted
    }   

    useEffect(()=>{
        if(blockchain.account===null)return;
        // isWlWhitelisted()
        // isOgWhitelisted()

    },[blockchain.account,presaleActive])
    
    const connectWallet=()=>{
        dispatch(connect());
    }

    const amountInput=(e)=>{
        setMintAmount(e)
    }

    // useEffect(()=>{
    //     connectWallet()
    // },[])

    console.log("Latest Build.")
    return (
        <div id="fs-calc">
            <div>
                {/* {
                    totalSupply===null&&( */}
                        <h3 className='mint-wolfboss-text'>
                            MINT WOLFBOSS                        
                        </h3>
                    {/* )
                } */}
                <div>
                    {
                        totalSupply!==null&&
                        <>
                            <h2>
                                
                                {/* <span> {totalSupply} </span> / <span> {maxSupply}</span>{" "} */}
                            </h2>
                            {/* <p>WolfBoss minted</p> */}
                        </>
                    }
                </div>
                <div>
                    <div>
                        {
                            cost!==null&&
                            <>
                                <p>
                                    {" "}
                                    <span id="range-n">{mintAmount}</span> x {cost/1000000000000000000} ETH
                                </p>
                                <span>max {maxPerWallet} per wallet</span>
                                <br/>
                                {/* <span>You have {limit} left</span> */}

                            </>
                        }
                    </div>
                    <h2>
                        {
                            cost!==null&&
                            <>
                               <span id="multiple">{((cost/1000000000000000000)*mintAmount)}</span> <br /> ETH
                            </>
                        }
                    </h2>
                </div>

            </div>

            
            {limit!==null&&
                <div className="range_scale_div">
                    <div id="input-range-scales">
                        {
                            Array.from(Array(limit).keys()).map((i)=>{
                                return(
                                    <div key={i}/>
                                )
                            })
                        }
                    </div>
                    <input
                        onInput={window["change"]}
                        type="range"
                        min={1}
                        max={limit}
                        defaultValue={mintAmount}
                        // step={1}
                        name="range"
                        id="price-counter"
                        onChange={(e)=>{amountInput(e.target.value)}}
                    />
                </div>
            }
        
            


            {
                blockchain.account===null&&
                <div onClick={()=>connectWallet()} className="mint_nft_button_div">
                    <a>
                        <button className="pink-button mint-nft-button">
                            <div>Connect Wallet</div>
                        </button>
                    </a>
                </div>
            }


            {
                (ogWhitelisted===true||wlWhitelisted===true)&&limit>0&&presaleActive===true?
                    <div className="mint_nft_button_div">
                        <a>
                            <button onClick={()=>{presaleActive===true?presaleMint():publicActive?publicMint():null}} className="pink-button mint-nft-button">
                                {
                                    claimingNft===false?
                                    <div>Mint NFT</div>
                                    :
                                    <div>
                                        <img src={loading}/>
                                    </div>
                                }
                            </button>
                        </a>
                    </div>
                :
                publicActive===true&&limit>0?
                    <div className="mint_nft_button_div">
                        <a>
                            <button onClick={()=>{publicMint()}} className="pink-button mint-nft-button">
                                {
                                    claimingNft===false?
                                    <div>Mint NFT</div>
                                    :
                                    <div>
                                        <img src={loading}/>
                                    </div>
                                }
                            </button>
                        </a>
                    </div>
                :
                ogWhitelisted===false&&wlWhitelisted===false?
                    <div className="mint_nft_button_div">
                        <a>
                            <button className="pink-button mint-nft-button">
                                <div>Not Whitelisted</div>
                            </button>
                        </a>
                    </div>
                :
                limit===0?
                    <div className="mint_nft_button_div">
                        <a>
                            <button className="pink-button mint-nft-button">
                                <div>Mint Limit Exceeded</div>
                            </button>
                        </a>
                    </div>
                :
                paused===true?
                    <div className="mint_nft_button_div">
                        <a>
                            <button className="pink-button mint-nft-button">
                                <div>
                                    Mint Coming Soon
                                </div>
                            </button>
                        </a>
                    </div>
                :blockchain.account!==null?
                <div className="mint_nft_button_div">
                    <a>
                        <button className="pink-button mint-nft-button">
                            <div>
                                <img src={loading}/>
                            </div>
                        </button>
                    </a>
                </div>
                :null
            }

        </div>
    )
}

export default MintWrapper