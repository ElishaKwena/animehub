import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from './icons';

const COLORS = [
  { name: 'dark900', class: 'bg-dark900' },
  { name: 'dark800', class: 'bg-dark800' },
  { name: 'dark700', class: 'bg-dark700' },
  { name: 'sapphire', class: 'bg-sapphire' },
  { name: 'cosmic', class: 'bg-cosmic' },
  { name: 'midnight', class: 'bg-midnight' },
  { name: 'electric', class: 'bg-electric' },
  { name: 'depth', class: 'bg-depth' },
  { name: 'neon_blue', class: 'bg-neon_blue' },
  { name: 'crimson', class: 'bg-crimson' },
  { name: 'nintedo', class: 'bg-nintedo' },
  { name: 'candy', class: 'bg-candy' },
  { name: 'chilli', class: 'bg-chilli' },
  { name: 'tart', class: 'bg-tart' },
  { name: 'orangered', class: 'bg-orangered' },
  { name: 'sunflower', class: 'bg-sunflower' },
  { name: 'pantone', class: 'bg-pantone' },
  { name: 'yellowlight', class: 'bg-yellowlight' },
  { name: 'neon_pink', class: 'bg-neon_pink' },
  { name: 'red_pink', class: 'bg-red_pink' },
  { name: 'fashion_pink', class: 'bg-fashion_pink' },
  { name: 'neon_purple', class: 'bg-neon_purple' },
  { name: 'lime_green', class: 'bg-lime_green' },
  { name: 'italy_green', class: 'bg-italy_green' },
  { name: 'royal_green', class: 'bg-royal_green' },
  { name: 'recycling_green', class: 'bg-recycling_green' },
  { name: 'pine_green', class: 'bg-pine_green' },
  { name: 'velvet_green', class: 'bg-velvet_green' },
  { name: 'orange', class: 'bg-orange' },
  { name: 'caramel', class: 'bg-caramel' },
  { name: 'espresso', class: 'bg-espresso' },
  { name: 'almond', class: 'bg-almond' },
  { name: 'vanilla', class: 'bg-vanilla' },
  { name: 'coffee', class: 'bg-coffee' },
  { name: 'midnight_gray', class: 'bg-midnight_gray' },
  { name: 'chrome', class: 'bg-chrome' },
  { name: 'frost', class: 'bg-frost' },
  { name: 'nickel', class: 'bg-nickel' },
  { name: 'pewter', class: 'bg-pewter' },
  { name: 'carbon', class: 'bg-carbon' },
  { name: 'white', class: 'bg-white' },
  { name: 'ivory_white', class: 'bg-ivory_white' },
  { name: 'off_white', class: 'bg-off_white' },
  { name: 'light_gray', class: 'bg-light_gray' },
  { name: 'dark_gray', class: 'bg-dark_gray' },
  { name: 'grape_jelly', class: 'bg-grape_jelly' },
  { name: 'dried_chillies', class: 'bg-dried_chillies' },
  { name: 'pinot', class: 'bg-pinot' },
  { name: 'black_bean', class: 'bg-black_bean' },
  { name: 'smokey_black', class: 'bg-smokey_black' },
  { name: 'black', class: 'bg-black' },
  { name: 'flennel', class: 'bg-flennel' },
  { name: 'autumnal', class: 'bg-autumnal' },
];

const FONTS = [
  { name: 'AltarGothicDemo', class: 'font-altar' },
  { name: 'Anurati', class: 'font-anurati' },
  { name: 'Berosong', class: 'font-berosong' },
  { name: 'Dracutaz', class: 'font-dracutaz' },
  { name: 'Elianto', class: 'font-elianto' },
  { name: 'Elixia1j6LB', class: 'font-elixia1j6lb' },
  { name: 'ELIXIA', class: 'font-elixia' },
  { name: 'Elixir', class: 'font-elixir' },
  { name: 'JavierSkull', class: 'font-javierskull' },
  { name: 'Mareno', class: 'font-mareno' },
  { name: 'RustyAttack', class: 'font-rustyattack' },
  { name: 'SadRock', class: 'font-sadrock' },
  { name: 'Sheword', class: 'font-sheword' },
  { name: 'ShlopRG', class: 'font-shloprg' },
  { name: 'TopsAgain', class: 'font-topsagain' },
  { name: 'WildwestHunt', class: 'font-wildwesthunt' },
  // Coding/Anime fonts
  { name: 'Fira Code', class: 'font-fira-code' },
  { name: 'IBM Plex Sans', class: 'font-plex-sans' },
  { name: 'Lobster', class: 'font-lobster' },
  { name: 'Varela Round', class: 'font-varela' },
  { name: 'WorldSeries', class: 'font-worldseries' },
  { name: 'Synchro', class: 'font-synchro' },
  { name: 'PrivusMedium', class: 'font-privus' },
  { name: 'LosttimohOTF', class: 'font-losttimoh-otf' },
  { name: 'LosttimohTTF', class: 'font-losttimoh-ttf' },
];

// Group icons by type
const solidIcons = [
  // Only include a subset for demo, you can expand this list
  'faCoffee', 'faCheck', 'faUser', 'faHeart', 'faStar', 'faCertificate', 'faIdBadge', 'faAward', 'faMedal', 'faShieldAlt', 'faTrophy',
  // ...add more as needed
];
const regularIcons = [
  'faAddressBook', 'faAddressCard', 'faBellRegular', 'faBookmarkRegular', 'faBuilding', 'faCalendarRegular', 'faClone', 'faComment', 'faCommentAlt', 'faComments', 'faCompassRegular', 'faCopy', 'faCopyright', 'faCreditCardRegular', 'faEnvelopeRegular', 'faFileRegular', 'faFileAltRegular', 'faFileArchiveRegular', 'faFileAudioRegular', 'faFileCodeRegular', 'faFileExcelRegular', 'faFileImageRegular', 'faFilePdfRegular', 'faFilePowerpointRegular', 'faFileVideoRegular', 'faFileWordRegular', 'faFlagRegular', 'faFolderRegular', 'faFolderOpenRegular', 'faFrownRegular', 'faFrownOpen', 'faGem', 'faHandLizardRegular', 'faHandPaperRegular', 'faHandPeaceRegular', 'faHandPointDown', 'faHandPointLeft', 'faHandPointRight', 'faHandPointUp', 'faHandPointerRegular', 'faHandRockRegular', 'faHandScissorsRegular', 'faHandSpockRegular', 'faIdBadge', 'faIdCard', 'faImageRegular', 'faImages', 'faKeyboard', 'faLaugh', 'faLaughBeam', 'faLaughSquint', 'faLaughWink', 'faLemonRegular', 'faLifeRing', 'faLightbulb', 'faListAltRegular', 'faMapRegular', 'faMehRegular', 'faMehBlank', 'faMehRollingEyes', 'faMinusSquare', 'faMoneyBillAlt', 'faMoonRegular', 'faNewspaper', 'faObjectGroup', 'faObjectUngroup', 'faPaperPlaneRegular', 'faPauseCircle', 'faPlayCircle', 'faPlusSquare', 'faQuestionCircleRegular', 'faRegistered', 'faSadCry', 'faSadTear', 'faSave', 'faShareSquare', 'faSmileRegular', 'faSmileBeam', 'faSmileWink', 'faSnowflakeRegular', 'faSquare', 'faStarRegular', 'faStarHalfRegular', 'faStickyNote', 'faStopCircle', 'faSunRegular', 'faSurprise', 'faThumbsDownRegular', 'faThumbsUpRegular', 'faTimesCircleRegular', 'faTired', 'faTrashAlt', 'faUserRegular', 'faWindowClose', 'faWindowMaximize', 'faWindowMinimize', 'faWindowRestore',
  // ...add more as needed
];
const brandIcons = [
  'faGithub', 'faTwitter', 'faFacebook', 'faGoogle', 'faLinkedin', 'faInstagram', 'faYoutube', 'faReddit', 'faPinterest', 'faSnapchat', 'faTiktok', 'faDiscord', 'faTwitch', 'faWhatsapp', 'faTelegram', 'faSlack', 'faDribbble', 'faBehance', 'faMedium', 'faVimeo', 'faSpotify', 'faApple', 'faMicrosoft', 'faAmazon', 'faPaypal', 'faStripe', 'faDropbox', 'faFigma', 'faGitlab', 'faBitbucket', 'faStackOverflow', 'faWordpress', 'faBlogger', 'faTumblr', 'faYahoo', 'faSkype', 'faWeibo', 'faVk', 'faOdnoklassniki', 'faQuora', 'faSoundcloud', 'faVine', 'faYelp', 'faFoursquare', 'faMeetup', 'faMixcloud', 'faResearchgate', 'faDeviantart', 'faFlickr', 'fa500px', 'faKickstarter', 'faPatreon', 'faSteam', 'faXbox', 'faPlaystation', 'faGooglePlay', 'faAppStore', 'faItunes', 'faUber', 'faLyft', 'faAirbnb', 'faTripadvisor', 'faEbay', 'faEtsy', 'faShopify', 'faMagento', 'faSalesforce', 'faJira', 'faConfluence', 'faTrello', 'faAsana', 'faBuffer', 'faHackerNews', 'faProductHunt', 'faAngellist', 'faCodepen', 'faJs', 'faHtml5', 'faCss3', 'faReact', 'faVuejs', 'faAngular', 'faNodeJs', 'faPython', 'faJava', 'faPhp', 'faLaravel', 'faSymfony', 'faDocker', 'faKubernetes', 'faAws', 'faGoogleDrive',
  // ...add more as needed
];

const renderIconGroup = (iconNames: string[], groupLabel: string) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">{groupLabel} Icons</h2>
    <div className="flex flex-wrap gap-8 items-center justify-center bg-white rounded p-6 shadow-sm">
      {iconNames.map((iconName) => {
        const icon = icons[iconName as keyof typeof icons];
        if (!icon) return null;
        return (
          <div key={iconName} className="flex flex-col items-center">
            <FontAwesomeIcon icon={icon} className="text-4xl text-sapphire mb-2" />
            <span className="text-xs mt-1">{iconName}</span>
          </div>
        );
      })}
    </div>
  </section>
);

const ColorFontShowcase: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-4 bg-off_white">
      <h1 className="text-4xl font-bold mb-8 text-center">Project Color & Font Showcase</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {COLORS.map((color) => (
            <div key={color.name} className={`rounded shadow flex flex-col items-center p-2 ${color.class}`}>
              <span className="text-xs font-semibold text-white drop-shadow-sm" style={{textShadow: '0 1px 2px #0008'}}>{color.name}</span>
              <div className="w-16 h-6 mt-2 rounded border border-white/20" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Font Families</h2>
        <div className="space-y-3">
          {FONTS.map((font) => (
            <div key={font.name} className={`${font.class} text-xl bg-white rounded px-4 py-2 shadow-sm`}>
              {font.name}: The quick brown fox jumps over the lazy dog.
            </div>
          ))}
        </div>
      </section>
      {renderIconGroup(solidIcons, 'Solid')}
      {renderIconGroup(regularIcons, 'Regular')}
      {renderIconGroup(brandIcons, 'Brand')}
    </div>
  );
};

export default ColorFontShowcase; 