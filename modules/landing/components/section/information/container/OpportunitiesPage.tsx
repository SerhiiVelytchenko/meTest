// components
import { InformationInInformationPage } from '../../../constants';
// views
import {
  WrapperBackgroundWhite,
  WrapperOpportunities,
  WrapperContentOpportunities,
  ImgOpportunitiesPage,
  ContainerOpportunitiesPage,
  PictureInformationPageNode,
  PictureInformationPageRails,
  PictureInformationPageReact,
  ItemContentOpportunities,
  TextTitleOpportunitiesPage,
  TextItemOpportunitiesPage,
  TextTitleItemOpportunitiesPage,
  ButtonArrowOpportunitiesPage,
  ItemContainerOpportunitiesPage,
  ContentOpportunities
} from '../views';

export const Opportunities = () => {
  const textTitle = 'There are a couple of things we do really well';
  const textButtonArrowTwo = 'ALL SERVICES';

  return (
    <WrapperBackgroundWhite>
      <WrapperOpportunities>
        <ContainerOpportunitiesPage>
          <PictureInformationPageNode />
          <PictureInformationPageRails />
          <PictureInformationPageReact />
        </ContainerOpportunitiesPage>
        <WrapperContentOpportunities>
          <ContentOpportunities gridArea={'title'}>
            <TextTitleOpportunitiesPage>{textTitle}</TextTitleOpportunitiesPage>
            <ButtonArrowOpportunitiesPage>{textButtonArrowTwo}</ButtonArrowOpportunitiesPage>
          </ContentOpportunities>
          {InformationInInformationPage.map((item) => {
            return (
              <ItemContentOpportunities key={item.id} gridArea={item.id}>
                <ImgOpportunitiesPage backgroundImage={item.imgUrl} />
                <ItemContainerOpportunitiesPage>
                  <TextTitleItemOpportunitiesPage>{item.textTitle}</TextTitleItemOpportunitiesPage>
                  <TextItemOpportunitiesPage>{item.text}</TextItemOpportunitiesPage>
                </ItemContainerOpportunitiesPage>
              </ItemContentOpportunities>
            );
          })}
        </WrapperContentOpportunities>
      </WrapperOpportunities>
    </WrapperBackgroundWhite>
  );
};
