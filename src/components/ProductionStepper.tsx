import {Step, StepLabel, Stepper} from "@mui/material";
import {ProductionRessource} from "../types/yinyang/GameType.ts";

export default function ProductionStepper() {
    const steps: ProductionRessource[] = ['Jin', 'Mu', 'Shui', 'Huo', 'Tu'];

    return (
        <div>
            <Stepper alternativeLabel activeStep={0}>
                {steps.map((label: ProductionRessource) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}