import React, {Component} from 'react';
import TypesTitleComponent from './TypesTitleComponent';
import TypesDescriptionComponent from './TypesDescriptionComponent';
import ProductsComponent  from '../Products/ProductComponent';

class TypesComponent extends Component {
  render() {
    const {types, more, element} = this.props;
    return (<section>
      { types.map((value) =>
          <section key={value.id}>
            <TypesTitleComponent title={ value.title }/>
            <TypesDescriptionComponent  element={element || {}}/>
            <ProductsComponent products={value.products} more={more} element={element || {}}/>
          </section>) }
    </section>);
  }
}

export default TypesComponent;