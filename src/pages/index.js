import React from "react"
// TODO customize bootstrap to match what was used --> https://getbootstrap.com/docs/4.3/getting-started/theming/
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" />
    <Container fluid>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus commodo nulla a dignissim. Ut posuere malesuada arcu convallis elementum. Donec eget ullamcorper justo. Pellentesque eget tortor sed nisi luctus mattis. Vestibulum ornare enim mi, eget tristique odio interdum in. Nulla et enim eu eros consectetur faucibus. Aliquam ornare porta libero, sit amet lobortis erat tincidunt eget. Quisque mattis mi laoreet justo ultricies malesuada. Ut pellentesque velit lacus. Vivamus auctor vitae dui quis varius. Praesent malesuada porta magna, vel ullamcorper nunc dignissim at. Ut viverra nunc at sodales sagittis.

Integer maximus ac tellus et tristique. Donec vehicula augue quis leo facilisis, ac accumsan ex lacinia. Sed faucibus diam sed augue finibus rutrum. Nunc eu eros lobortis, accumsan massa ac, gravida risus. Suspendisse condimentum sapien ultricies, interdum lacus vitae, efficitur sem. Ut dictum lacinia tellus, quis malesuada felis hendrerit quis. Cras ut fringilla metus, vel varius ex. Nulla maximus consectetur sapien id auctor. Nam ullamcorper auctor scelerisque. Curabitur condimentum, odio quis tincidunt tristique, ligula tortor luctus diam, commodo suscipit arcu ex sit amet diam. Donec tincidunt orci vel metus accumsan, vitae elementum ante porta. Aenean sit amet eros tristique, eleifend eros vel, sollicitudin lectus.

Aliquam congue placerat lacinia. Curabitur fermentum orci quis faucibus efficitur. Maecenas aliquam eleifend mi ac tincidunt. Morbi nec arcu non lacus hendrerit condimentum. Suspendisse sit amet nisl vehicula, fringilla sapien et, laoreet orci. Donec tempus volutpat euismod. Mauris mollis hendrerit justo sed accumsan. Mauris lacinia auctor tellus, sed sagittis erat dapibus tincidunt. Aliquam a commodo orci, sit amet luctus ipsum. Quisque posuere imperdiet leo ullamcorper volutpat. Duis in nibh bibendum, tristique quam eget, convallis ex. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum dolor a urna cursus egestas.

Nulla gravida sem ac justo pellentesque, ac consequat justo dictum. Suspendisse consequat turpis imperdiet, malesuada mi a, fringilla magna. Quisque non sem condimentum, rutrum enim sit amet, elementum tortor. Aenean faucibus varius turpis congue pellentesque. In iaculis mattis massa eu convallis. Duis facilisis tempor erat, non tempor lacus vehicula vitae. Duis vitae nunc rhoncus, volutpat nulla in, feugiat dui. Etiam eleifend semper urna, at dapibus purus semper at. Cras lobortis interdum felis, rutrum sodales lectus luctus quis. Sed ultricies ligula sit amet urna ornare convallis. Integer maximus mattis quam in consequat. Donec tincidunt dapibus magna in feugiat. Maecenas porttitor interdum est, at pellentesque lorem mollis non. Donec elementum convallis nisi, id aliquam ante accumsan eu.

Curabitur imperdiet maximus purus suscipit tempus. Aliquam blandit eros non justo vulputate lobortis. Vestibulum vehicula efficitur ornare. Quisque mollis odio ut ante bibendum, et posuere nisi ullamcorper. Donec sollicitudin tristique mi id dictum. Sed pulvinar tincidunt sapien, non imperdiet purus blandit id. Curabitur blandit risus nec velit convallis, sit amet lacinia turpis molestie. Mauris imperdiet rhoncus diam vitae ultricies. Suspendisse at tempor mauris. Nulla ac lacus enim. Quisque vel tellus velit. Duis quam diam, posuere tincidunt tellus sed, lacinia tempor purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris placerat dignissim erat, sit amet imperdiet quam auctor non. Mauris diam urna, malesuada in rutrum malesuada, suscipit id augue.
    </Container>
  </Layout>
)

export default IndexPage
