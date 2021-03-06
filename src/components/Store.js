import './Store.css';
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"

export const Store = () => (
    <div className="Store">
      <header className="App-header">
        
        <p>
          Learning React: Kandy Korner Locations
        </p>
        
        <a
          className="App-link"
          href="https://github.com/Tingting0618/store_locations"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Page
        </a>
      </header>

      <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

        <h2>Products</h2>
        <article className="locations">
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </article>
    </div>
  );