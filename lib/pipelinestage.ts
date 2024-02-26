import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { dockerbuildstack } from "./dockerbuildstack";


export class pipelinestage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps) {
        super(scope, id, props)

        new dockerbuildstack(this,"DockerBuild",{
            stackName:props.stageName
        })

    }
}