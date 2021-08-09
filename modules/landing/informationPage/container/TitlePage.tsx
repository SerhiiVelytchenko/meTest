// views
import {
  RightContainer,
  WrapperTitlePageGrid,
  WrapperPageBackgroundWhite,
  ButtonArrowTitlePage,
  TextTitleTitlePage,
  ContainerTitleInformationPage
} from '../views';

export const TitleInformationPage = () => {
  const text =
    'Oh by the way, we`re Cultum. A passionate, tight-knit team of premier specialists who can take on any challenge in the sphere of web and mobile app developmen';
  const textButtonArrow = 'MORE ABOUT US';

  return (
    <WrapperPageBackgroundWhite>
      <WrapperTitlePageGrid>
        <ContainerTitleInformationPage>
          <TextTitleTitlePage>{text}</TextTitleTitlePage>
          <ButtonArrowTitlePage>{textButtonArrow}</ButtonArrowTitlePage>
        </ContainerTitleInformationPage>
        <RightContainer />
      </WrapperTitlePageGrid>
    </WrapperPageBackgroundWhite>
  );
};
