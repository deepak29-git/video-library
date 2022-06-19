import '../Toast/Toast.css'
import successIcon from '../../assets/success.png'
export const Toast = ({text}) => {
  return (
    <div class="alert success-outline icon-alert">
      <img class="icon" src={successIcon} alt="success.png" />
      {text}
    </div>
  );
};
