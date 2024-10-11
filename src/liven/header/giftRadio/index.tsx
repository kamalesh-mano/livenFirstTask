import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useStore } from '../../store';
import './giftRadio.css';

function GiftRadio() {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#EB4B6E',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255,255,255,.35)',
      }),
    },
  }));

  const { giftingMode, setGiftingMode } = useStore();

  return (
    <div className="giftRadio">
      <div className='label'>
        <CardGiftcardIcon sx={{ fontSize: 12, marginRight: "2px" }} />
        Purchase as gift
      </div>
      <div className='radio'>
        <AntSwitch
          checked={giftingMode}
          onChange={(e) => {
            setGiftingMode(e.target.checked); 
          }}
          inputProps={{ 'aria-label': 'ant design' }}
        />
      </div>
    </div>
  );
}

export default GiftRadio;
