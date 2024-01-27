import { Chess, Color, Move, Square } from 'chess.js';
import { useCallback, useMemo, useState } from 'react';
import { Chessboard } from 'react-chessboard';
import CustomDialog from './CustomDialog';

interface MoveData {
	from: Square;
	to: Square;
	color: Color;
}

const Game = () => {
	const chess = useMemo<Chess>(() => new Chess(), []);
	const [fen, setFen] = useState<string>(chess.fen());
	const [over, setOver] = useState<'' | string>('');

	const makeAMove = useCallback(
		(move: MoveData): Move | null => {
			try {
				const result: Move = chess.move(move);
				setFen(chess.fen());

				console.log(
					`over : ${chess.isGameOver()}, checkmate : ${chess.isCheckmate()}`
				);

				if (chess.isGameOver()) {
					if (chess.isCheckmate()) {
						setOver(
							`CHECKMATE!!! ${
								chess.turn() === 'w' ? 'BLACK' : 'WHITE'
							} WINS THE GAME`
						);
					} else if (chess.isDraw()) {
						setOver(`DRAW HAS HAPPENED`);
					} else {
						setOver('GAME OVER!!!');
					}
				}

				return result;
			} catch (error) {
				return null;
			}
		},
		[chess]
	);

	const onDrop = (sourceSquare: Square, targetSquare: Square): boolean => {
		const moveData: MoveData = {
			from: sourceSquare,
			to: targetSquare,
			color: chess.turn(),
		};

		const move: Move | null = makeAMove(moveData);

		if (move === null) {
			return false;
		}

		return true;
	};

	return (
		<>
			<Chessboard position={fen} onPieceDrop={onDrop} />

			<CustomDialog
				open={Boolean(over)}
				title={over}
				contentText={over}
				handleContinue={() => setOver('')}
			/>
		</>
	);
};

export default Game;
