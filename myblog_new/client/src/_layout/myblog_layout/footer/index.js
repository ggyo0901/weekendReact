import { FooterWrapper, FooterTamplate, FooterRight, Footertxt } from "./style";
import { FontAwesomIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
const LayOutFooter = () => {
  return (
    <FooterWrapper>
      <FooterTamplate>
        <Footertxt>
          <p>
            SeongYong Kim Group
            <br />
            (우) 00000 서울시 용산구 이태원 어딘가 찾아보세요
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            010.1234.1234 korpg95274@gmail.com
            <br />
            <br />
            Copyright 2022. KSY©, Ltd. All rights reserved.
          </p>
        </Footertxt>
        <FooterRight>
          <ul>
            <li>
              GO ! <span> KSY SNS </span>
            </li>
            <li class="insta">{/* <FontAwesomIcon icon={faInstagram} /> */}</li>
            <li class="youtube">{/* <FontAwesomIcon icon={faYoutube} /> */}</li>
          </ul>
        </FooterRight>
      </FooterTamplate>
    </FooterWrapper>
  );
};
export default LayOutFooter;
