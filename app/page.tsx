import styles from "./page.module.css";
import HeroSection from "@/widgets/HeroSection/HeroSection";
import TrendingCollection from "@/widgets/TrendingCollection/TrendingCollection";
import TopCreators from "@/widgets/TopCreators/TopCreators";
import BrowseCategories from "@/widgets/BrowseCategories/BrowseCategories";
import DiscoverMore from "@/widgets/DiscoverMore/DiscoverMore";
import MagicMashrooms from "@/widgets/MagicMashrooms/MagicMashrooms";
import HowItWorks from "@/widgets/HowItWorks/HowItWorks";
import Subscribe from "@/widgets/Subscribe/Subscribe";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <DiscoverMore/>
      <MagicMashrooms/>
      <HowItWorks/>
      <Subscribe/>
    </main>
  );
}
