import "./BrowseCategories.css"
import TextH1 from "@/components/TextH1/TextH1"
import items from "../../stores/imageBrowseCategories"
import BrowseCategoriesCard from "@/components/BrowseCategoriesCard/BrowseCategoriesCard"

const BrowseCategories = () => {
    return (
        <section className="browseCategoriesSection">
            <TextH1 style={{marginBottom: '20px', fontSize: '38px'}}>Browse Categories</TextH1>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}} >
                {items.map((item) => 
                    <BrowseCategoriesCard login={item.text} src={item.photo}/>
                )}
            </div>
        </section>
    )
}

export default BrowseCategories;