import { styled } from "styled-components";


export const Container = styled.div`
   .slide-show {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image {
          display: block;
          position: relative;
          cursor: pointer;
     }
     .direction {
          position: absolute;
          display: flex;
          top: 0;
          gap: 1340px;
     }
     
     .prev-button , .next-button {
          box-shadow: inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296;
          border-radius: 5px;
          width: 80px;
          height: 250px;
          display: flex;
          justify-content: center;
          img {
               width: 40px;
          }
     }
     
   
     
    

     .card-poster {
        display: flex;
   }
`;