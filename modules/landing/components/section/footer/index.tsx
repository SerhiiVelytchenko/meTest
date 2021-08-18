import {
  WrapperFooter,
  WrapperBackgroundWhite,
  ButtonFooter,
  PictureFooter,
  WrapperFooterInfo,
  TextTitleFooterInfo,
  WrapperTextFooterInfo,
  TextFooterInfo
} from './views';

export const Footer = () => {
  const textTitle = 'We`re just as excited about your idea.';
  const text = '2021 Cultum LLC. Sll rights reserved';
  const textButton = 'TELL US MORE';

  return (
    <WrapperBackgroundWhite>
      <WrapperFooter>
        <PictureFooter />
        <WrapperFooterInfo>
          <WrapperTextFooterInfo>
            <TextTitleFooterInfo>{textTitle}</TextTitleFooterInfo>
          </WrapperTextFooterInfo>
          <ButtonFooter>{textButton}</ButtonFooter>
          <TextFooterInfo>{text}</TextFooterInfo>
        </WrapperFooterInfo>
      </WrapperFooter>
    </WrapperBackgroundWhite>
  );
};
