import { styled } from "@/styles/stitches.config";


export const AboutMeSection = styled("section", {
  background: "$grey1",
  padding: "$section 0",
  marginTop: "2px",
  width: "100%",
  display: "grid",
  gridGap: "4rem",
  
  "@desktop": {
    gridTemplateColumns: "1fr 1fr",
  },
  
  "@mobile": {
    gridTemplateColumns: "1fr",
    overflow: "hidden",
    padding: "$sectionMobile 0",
  },

    
});


export const ImgAboutMe = styled("img",{
  borderRadius: "50%",
  border: "2px solid '$brand1'"
})