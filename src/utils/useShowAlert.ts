import { useSetRecoilState } from 'recoil';
import { alertState, TAlert } from '../recoil/atoms/Alert';

export default function useShowAlert() {
	const setAlert = useSetRecoilState(alertState);

	return ({ type, msg }: TAlert) => {
		setAlert({
			show: true,
			type,
			msg,
		});

		setTimeout(() => {
			setAlert({
				show: false,
				type: '',
				msg: '',
			});
		}, 5000);
	};
}
