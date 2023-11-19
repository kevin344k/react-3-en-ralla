import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel ANgel Duran"
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="pheralb"
        name="Pablo Hernadez"
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="spyed"
        name="spyed"
      />
    </section>

    //hora 1:20
  );
}
