import React, {useReducer, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './stylesheet'

/* Component Imports */
import {StateButton} from './resetButton'
import {SymbolButton} from './pauseButton'

/* Function Imports */
import {timeDisplay} from "./timeFns"

export const PauseDispatch = React.createContext(null);

export function Transient(route) {
	const [transientState, dispatch] = useReducer(timerReducer, {
		mode: "transient",
		lastMode: "transient",
		transientCount: 3,
		workCount: route.route.params.workCount,
		breakCount: route.route.params.breakCount,
		workCountArch: route.route.params.workCount,
		breakCountArch: route.route.params.breakCount,
		paused: false,
	})

	const decrementID = setInterval(() => {
		if(!transientState.paused) {
			dispatch({type: "normal"})
		} else {}
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
							{timeDisplay(transientState.workCount)}
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
							{timeDisplay(transientState.breakCount)}
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

	switch (action.type) {
		case "pause":
			return {
				mode: state.mode,
				lastMode: state.lastMode,
				transientCount: state.transientCount,
				workCount: state.workCount,
				breakCount: state.breakCount,
				paused: true,
				workCountArch: state.workCountArch,
				breakCountArch: state.breakCountArch,
			}
		case "resume":
			return {
				mode: state.mode,
				lastMode: state.lastMode,
				transientCount: state.transientCount,
				workCount: state.workCount,
				breakCount: state.breakCount,
				paused: false,
				workCountArch: state.workCountArch,
				breakCountArch: state.breakCountArch,
			}
	}
	switch (state.mode) {
		case "transient":
			if (state.transientCount !== 1) {
				return {
					mode: "transient",
					lastMode: "transient",
					transientCount: state.transientCount - 1,
					workCount: state.workCount,
					breakCount: state.breakCount,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			} else {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: state.workCount,
					breakCount: state.breakCount,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			}
		case "work":
			if (state.workCount !== 1) {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: state.workCount - 1,
					breakCount: state.breakCount,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			} else {
				return {
					mode: "break",
					lastMode: "break",
					transientCount: 0,
					workCount: state.workCount,
					breakCount: state.breakCountArch,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			}
		case "break":
			if (state.breakCount !== 1) {
				return {
					mode: "break",
					lastMode: "break",
					transientCount: 0,
					workCount: state.workCount,
					breakCount: state.breakCount - 1,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			} else {
				return {
					mode: "work",
					lastMode: "work",
					transientCount: 0,
					workCount: state.workCountArch,
					breakCount: state.breakCount,
					paused: false,
					workCountArch: state.workCountArch,
					breakCountArch: state.breakCountArch,
				}
			}
		}
}