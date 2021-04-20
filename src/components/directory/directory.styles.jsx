import styled from 'styled-components'

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'hats hats jackets jackets'
    'sneakers sneakers womens mens';

  #hats {
      grid-area: hats;
    }
  #jackets {
      grid-area: jackets;
    }
  #sneakers {
      grid-area: sneakers;
    }
  #womens {
      grid-area: womens;
    }
  #mens {
      grid-area: mens;
    }
`
