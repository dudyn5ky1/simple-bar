import { PLIcon, RUIcon, UAIcon, GBIcon } from './Icons.jsx';

const Language = ({ output }) => {
  let icon;
	console.log(output);
  switch (output) {
    case 'PolishPro':
      icon = <PLIcon />;
      break;
    case 'Russian':
      icon = <RUIcon />;
      break;
    case 'Ukrainian-PC':
      icon = <UAIcon />;
      break;
    case 'ABC':
      icon = <GBIcon />;
  }
  return (
    <div className="language">
      {icon}
    </div>
  )
}

export default Language
