import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function App () {
  return (
    <div className="">
      <Parallax pages={ 4 }>
        <ParallaxLayer className="flex  flex-col justify-center items-center"
          speed={ .25 }

          style={ {
            backgroundImage: `url("https://redefinestatus.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568736772245-26914aae0b09%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75")`,
            backgroundSize: "cover",
            borderPosition: "center"
          } }>
          <h1 className="text-9xl font-bold text-white " >Redefine Status</h1>
          <p className="font-semibold text-3xl mt-11 text-gray-900">How We Can Correct <b>Mankind’s Leaderboard </b></p>
        </ParallaxLayer>
        <ParallaxLayer offset={ 1 } speed={ 0.5 } className="max-w-[80%] mx-auto"
          style={ {

            backgroundSize: "cover",

          } }>
          <h1 className="text-2xl text-blue-700  font-semibold">Overview of The Problem:</h1>
          <p className=" text-black">The fact that our designer goods do not represent wealth for positive utility is having more negative damage to society than we can fathom. This article is going to help detail why, and detail our solution in progress.<br />
            <br />

            As individuals, once we cover our basic needs, status becomes an intrinsic motivator in the rest of our actions. Status comes in many forms. The healthiest / most enlightened cultures put the highest status in rewarding positive sum behavior. In global culture, luxury goods like a Gucci bag/belt have become widespread as top status symbols, reflecting vapid use of money as the highest form of status. It has become such common Christmas list item for broke young teenagers that the richest man on the planet at the time of this writing got his riches from selling these overpriced goods representing nothing more than the ability to waste money. Collectively this misrepresentation of true status (service to others) is attributing more damage to building a healthy positive culture than we can imagine.<br />
            <br />

            Social media, our emergent global cultural production system, could be used collectively to unify humanity around bettering ourselves and others. Instead it is used to further extract youth through a false form of status as a service. Imagine a world where this wasteful spending was considered cancelable. One where we collectively take accountability for the capability to money to the positive growth of us as a species. Imagine a world where the designer things we wore showed off spending a lot of money to make a lot of positive impact. If the world you imagined only went as far as to redistribute the wealth of designer wear, try imagining the deeper cultural effects this new alignment would have. </p>
          <div className=" border mt-4 font-mono border-l-blue-800 hover:bg-sky-400 hover:text-white rounded-md ">“Over the past hundred years we have increase the global GDP sevenfold, yet wealth inequality continues to skyrocket and luxury spending grows rapidly. In order to change the failure of redistribution of wealth at scale, we must effectively influence culture and help redefine what “status” is in the modern age. This will ultimately change the flow of money in society as the new age of status being helping the world, becomes more prominent. We have failed at building a society which healthily distributes wealth/power. Given society is a collective project we are responsible for, we think this stems from the culture not supporting doing good as the highest form of status.  We have more than enough resources, but many people without access to them, and a culture that motivates and glorifies overspending on vanity luxury goods.” - <span className="text-blue-950">Jack Jay</span></div>
        </ParallaxLayer>
        <ParallaxLayer offset={ 2 } speed={ 0.1 } className="max-w-[80%] mx-auto"
          style={ {

            backgroundSize: "cover",

          } }>
          <h1 className="text-2xl text-blue-700  font-semibold">A Deeper Dive:</h1>
          <p className=" text-black">On a fundamental level once someone gets the basics covered as in food, water, shelter. They can start to spend their time and money on convenience, health, and purpose but more often than not; status is where a majority of surplus wealth goes. <br />
            <br />

            Societally we lack an alignment of our status symbols with creating a better world and with bettering ourselves. This idea to change what we cultural see as status has been referred to as “Status Engineering”. <br />
            <br />

            What we wear is the most direct way we have to represent ourselves and our ideals/values. What your role model wears, or any person of influence is shaping the idea of status in that child, teenager, or adults mind. <br />
            <br />

            Status is what we are buying when we pay $1, $10, or even $500 extra for a certain brand of T-Shirt irrespective of comfort.<br />
            <br />
            The problem is not that buying status is a failure mode of an individual. Status is a form of positive competitive drive in society and a tool for respect attribution. That’s why you see Dior shoes in economy. This is not a miscalculation, currently the status from spending $1100 on shoes does have more long term value than things like first class because we are playing the game of unenlightened capitalism.<br />
            <br />
            The problem is that we support the status symbol which costs $1100 and does no good for humanity.  Thus this expenditure is not a failure of the buyer who bought status, it is only misguided that we do not have designer shoes that cost $1100, which builds a literal house in Bangladesh (a small home can be built as a permanent structure for someone for this amount).  We need higher forms of status to exist in order to progress our culture which will aid in the distribution of wealth and power on a systemic level. <br />
            <br />
            Once higher status objects are unveiled will these purely financial status seems become recognized for their tackiness and buying status will coincide with doing good. With no better alternative currently, we idolize symbols of wealth. Thus, on our highest display of who we are, the clothing we wear, we display 0 creativity or care for the world in spending and instead promote wasting wealth for the sake of power/leverage over others, and then we wonder why society is misaligned to building a healthy world. Fashion, what we wear, is the biggest signal we have in representing our identity and values.<br />
            <br />
            If we can provide a better representation of status in clothing we can not only change the money used to buy status into doing good for the world, but we can change our core representation of status in society towards doing good.<br />

            While the larger belief is that this systemic change is the real impact in realigning our culture towards true status, the amount of funds in status spending that could be redirected towards positive causes is also no joke.  </p>
          <div className=" border mt-4 font-mono border-l-blue-800 hover:bg-sky-400 hover:text-white rounded-md ">The personal luxury goods market is projected to grow from USD 257.26 billion in 2020 to USD 352.84 billion in 2027</div>
          <div className=" border mt-4 font-mono border-l-blue-800 hover:bg-sky-400 hover:text-white rounded-md ">The personal luxury goods market is projected to grow from USD 257.26 billion in 2020 to USD 352.84 billion in 2027</div>
        </ParallaxLayer>
      </Parallax>
    </div >
  );
}

export default App;
