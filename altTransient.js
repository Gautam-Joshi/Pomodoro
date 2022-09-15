import React, { useReducer, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesheet'

/* Component Imports */
import { StateButton } from './actionButton'
import { SymbolButton } from './pauseButton'

export const PauseDispatch = React.createContext(null);

export function Transient() {
	const [transientState, dispatch] = useReducer(timerReducer, {mode: "transient", lastMode: "transient", transientCount: 3, workCount: 3, breakCount: 3, paused: false,})

	const decrementID = setInterval(() => {
		dispatch({type: "normal"})
	}, 1000);

	useEffect(() => {
		return () => {
			clearInterval(decrementID)
		}
	},)

	switch (transientState.mode) {
		case "transient":
			return(
				<View style={styles.transient.view}>
						<Text style={styles.transient.text}>
							Timer Starts In
						</Text>
						<Text style={styles.transient.countdown}>
							{transientState.transientCount}
						</Text>
						<StateButton
							style ={styles.transient.stopsymbol}
							size = {55}
							symbol = "stop"
							screen="Set"
						/>
				</View>
			)
		case "work":
			return(
				<View style={[styles.timer.view, styles.timer.workbg]}>
						<Text style={styles.timer.text}>
							Work
						</Text>
						<Text style={styles.timer.work}>
							{transientState.workCount}
						</Text>
						<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 375,
							}}>
							<PauseDispatch.Provider value={dispatch}>
							{transientState.paused
							?	<SymbolButton
									style = {styles.button.circular.navigateBefore}
									symbol = "play-arrow"
									size = {30}
									actionType = "resume"
								/>
							:	<SymbolButton
									style = {styles.button.circular.navigateBefore}
									symbol = "pause"
									size = {30}
									actionType = "pause"
								/>
							}
								<StateButton
									style ={styles.button.circular.done}
									symbol = "replay"
									size = {30}
									screen = "Set"
								/>
								</PauseDispatch.Provider>
							</View>
				</View>
			)
		case "break":
			return(
				<View style={[styles.timer.view, styles.timer.breakbg]}>
						<Text style={styles.timer.text}>
							Break
						</Text>
						<Text style={styles.timer.break}>
							{transientState.breakCount}
						</Text>
						<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 375,
							}}>
							<PauseDispatch.Provider value={dispatch}>
							{transientState.paused
							?	<SymbolButton
									style = {styles.button.circular.navigateBefore}
									symbol = "play-arrow"
									size = {30}
									actionType = "resume"
								/>
							:	<SymbolButton
									style = {styles.button.circular.navigateBefore}
									symbol = "pause"
									size = {30}
									actionType = "pause"
								/>
							}
								<StateButton
									style ={styles.button.circular.done}
									symbol = "replay"
									size = {30}
									screen = "Set"
								/>
								</PauseDispatch.Provider>
							</View>
				</View>
			)
	}
}

export function timerReducer(state, action) {

	if (!state.paused) {
	switch (action.type) {
		case "pause":
			console.log("Pausing State...")
			return {
				mode: state.mode,
				lastMode: state.lastMode,
				transientCount: state.transientCount,
				workCount: state.workCount,
				breakCount: state.breakCount,
				paused: true,
			}
		case "resume":
			console.log("Resuming State...")
			return {
				mode: state.mode,
				lastMode: state.lastMode,
				transientCount: state.transientCount,
				workCount: state.workCount,
				breakCount: state.breakCount,
				paused: false,
			}
	}
	switch (state.mode) {
		case "transient":
			if (state.transientCount !== 1) {
				return {
					mode: "transient",
					lastMode: "transient",
					transientCount: state.transientCount - 1,
					workCount: 3,
					breakCount: 3,
					paused: false,
				}
			} else {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: 3,
					breakCount: 3,
					paused: false,
				}
			}
		case "work":
			if (state.workCount !== 1) {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: state.workCount - 1,
					breakCount: 3,
					paused: false,
				}
			} else {
				return {
					mode: "break",
					lastMode: "break",
					transientCount: 0,
					workCount: 3,
					breakCount: 3,
					paused: false,
				}
			}
		case "break":
			if (state.breakCount !== 1) {
				return {
					mode: "break",
					lastMode: "break",
					transientCount: 0,
					workCount: 3,
					breakCount: state.breakCount - 1,
					paused: false,
				}
			} else {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: 3,
					breakCount: 3,
					paused: false,
				}
			}
		case "paused":
			return state
		}
	}

	console.log("State Paused, Returning PrevState")
	return state
}