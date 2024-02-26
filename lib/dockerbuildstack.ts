import { Stack, StackProps } from "aws-cdk-lib";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Construct } from "constructs";
import path = require("path");


interface dockerbuildstackProps extends StackProps{
    stageName?: string
}

export class dockerbuildstack extends Stack {
    constructor(scope: Construct, id: string, props: dockerbuildstackProps) {
        super(scope, id, props);
       
        const asset = new DockerImageAsset(this, 'BuildDockerImage', {
            directory: path.join(__dirname, '../docker'),
            assetName: "Nginx_Image",
          });
          
          console.log(asset.imageTag);
    }
}