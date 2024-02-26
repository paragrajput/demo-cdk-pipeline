import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class DemoCdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const source = CodePipelineSource.gitHub('paragrajput/demo-cdk-pipeline','master');
    const pipeline = new CodePipeline(this, 'MyTestPipeline', {
      pipelineName: 'MyTestPipeline',
      synth: new ShellStep('Synth', {
        input: source,
        commands: ['npm ci', 'npx cdk synth']
      })
    });

  }
}
