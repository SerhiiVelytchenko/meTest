// components
import { InformationInInformationPage } from '../../constants';
// views
import {
  WrapperPageBackgroundWhite,
  WrapperOpportunitiesPageGrid,
  WrapperContentOpportunitiesPageGrid,
  ImgOpportunitiesPage,
  ContainerOpportunitiesPage,
  PictureInformationPageNode,
  PictureInformationPageRails,
  PictureInformationPageReact,
  ItemContentOpportunitiesPageGrid,
  TextTitleOpportunitiesPage,
  TextItemOpportunitiesPage,
  TextTitleItemOpportunitiesPage,
  ButtonArrowOpportunitiesPage,
  ItemContainerOpportunitiesPage,
  ContentOpportunitiesPageGrid
} from '../views';

export const OpportunitiesPage = () => {
  const textTitle = 'There are a couple of things we do really well';
  const textButtonArrowTwo = 'ALL SERVICES';

  return (
    <WrapperPageBackgroundWhite>
      <WrapperOpportunitiesPageGrid>
        <ContainerOpportunitiesPage>
          <PictureInformationPageNode />
          <PictureInformationPageRails />
          <PictureInformationPageReact />
        </ContainerOpportunitiesPage>
        <WrapperContentOpportunitiesPageGrid>
          <ContentOpportunitiesPageGrid gridArea={'title'}>
            <TextTitleOpportunitiesPage>{textTitle}</TextTitleOpportunitiesPage>
            <ButtonArrowOpportunitiesPage>{textButtonArrowTwo}</ButtonArrowOpportunitiesPage>
          </ContentOpportunitiesPageGrid>
          {InformationInInformationPage.map((item) => {
            return (
              <ItemContentOpportunitiesPageGrid key={item.id} gridArea={item.id}>
                <ImgOpportunitiesPage backgroundImage={item.imgUrl} />
                <ItemContainerOpportunitiesPage>
                  <TextTitleItemOpportunitiesPage>{item.textTitle}</TextTitleItemOpportunitiesPage>
                  <TextItemOpportunitiesPage>{item.text}</TextItemOpportunitiesPage>
                </ItemContainerOpportunitiesPage>
              </ItemContentOpportunitiesPageGrid>
            );
          })}
        </WrapperContentOpportunitiesPageGrid>
      </WrapperOpportunitiesPageGrid>
    </WrapperPageBackgroundWhite>
  );
};
