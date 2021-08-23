// components
import { InformationInInformationPage } from '../../../constants';
// views
import {
  WrapperBackgroundWhite,
  WrapperOpportunities,
  ContentOpportunities,
  ImgOpportunitiesPage,
  WrapperLeftContainer,
  PictureNode,
  PictureRails,
  PictureReact,
  ItemContentOpportunities,
  TextTitleOpportunitiesPage,
  TextItemOpportunitiesPage,
  TextTitleItemOpportunitiesPage,
  ButtonArrowOpportunitiesPage,
  ItemContainerOpportunitiesPage,
  TitleContentOpportunities,
  WrapperRightContainer
} from '../views';

export const Opportunities = () => {
  const textTitle = 'There are a couple of things we do really well';
  const textButtonArrowTwo = 'ALL SERVICES';

  const information = InformationInInformationPage.map((item) => {
    return (
      <ItemContentOpportunities key={item.id} gridArea={item.id}>
        <ImgOpportunitiesPage backgroundImage={item.imgUrl} />
        <ItemContainerOpportunitiesPage>
          <TextTitleItemOpportunitiesPage>{item.textTitle}</TextTitleItemOpportunitiesPage>
          <TextItemOpportunitiesPage>{item.text}</TextItemOpportunitiesPage>
        </ItemContainerOpportunitiesPage>
      </ItemContentOpportunities>
    );
  });
  return (
    <WrapperBackgroundWhite>
      <WrapperOpportunities>
        <WrapperLeftContainer>
          <PictureNode />
          <PictureRails />
          <PictureReact />
        </WrapperLeftContainer>
        <WrapperRightContainer>
          <TitleContentOpportunities>
            <TextTitleOpportunitiesPage>{textTitle}</TextTitleOpportunitiesPage>
            <ButtonArrowOpportunitiesPage>{textButtonArrowTwo}</ButtonArrowOpportunitiesPage>
          </TitleContentOpportunities>
          <ContentOpportunities>{information}</ContentOpportunities>
        </WrapperRightContainer>
      </WrapperOpportunities>
    </WrapperBackgroundWhite>
  );
};
