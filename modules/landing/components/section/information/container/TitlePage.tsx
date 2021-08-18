// views
import {
  RightContainer,
  WrapperTitle,
  WrapperBackgroundWhite,
  ButtonArrowTitlePage,
  TextTitleTitlePage,
  ContainerTitleInformationPage
} from '../views';

export const TitleInformation = () => {
  const text =
    'Oh by the way, we`re Cultum. A passionate, tight-knit team of premier specialists who can take on any challenge in the sphere of web and mobile app developmen';
  const textButtonArrow = 'MORE ABOUT US';

  return (
    <WrapperBackgroundWhite>
      <WrapperTitle>
        <ContainerTitleInformationPage>
          <TextTitleTitlePage>{text}</TextTitleTitlePage>
          <ButtonArrowTitlePage>{textButtonArrow}</ButtonArrowTitlePage>
        </ContainerTitleInformationPage>
        <RightContainer />
      </WrapperTitle>
    </WrapperBackgroundWhite>
  );
};
