import {
  WrapperFooterPageFlex,
  WrapperPageBackgroundWhite,
  ButtonFooterPage,
  PictureFooterPage,
  WrapperFooterInfo,
  TextTitleFooterInfo,
  WrapperTextFooterInfo,
  TextFooterInfo
} from './views';

export const FooterPage = () => {
  const textTitle = 'We`re just as excited about your idea.';
  const text = '2021 Cultum LLC. Sll rights reserved';
  const textButton = 'TELL US MORE';
  return (
    <WrapperPageBackgroundWhite>
      <WrapperFooterPageFlex>
        <PictureFooterPage />
        <WrapperFooterInfo>
          <WrapperTextFooterInfo>
            <TextTitleFooterInfo>{textTitle}</TextTitleFooterInfo>
          </WrapperTextFooterInfo>
          <ButtonFooterPage>{textButton}</ButtonFooterPage>
          <TextFooterInfo>{text}</TextFooterInfo>
        </WrapperFooterInfo>
      </WrapperFooterPageFlex>
    </WrapperPageBackgroundWhite>
  );
};
