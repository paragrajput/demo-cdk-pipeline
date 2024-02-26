import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";


interface dockerbuildstackProps extends StackProps{
    stageName?: string
}

export class dockerbuildstack extends Stack {
    constructor(scope: Construct, id: string, props: dockerbuildstackProps) {
        super(scope, id, props);
        
    }
}