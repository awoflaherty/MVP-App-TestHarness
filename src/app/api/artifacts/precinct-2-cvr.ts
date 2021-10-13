export const PRECINCT_2_CVR = `<?xml version="1.0" encoding="UTF-8"?>
<CastVoteRecordReport xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://itl.nist.gov/ns/voting/1500-103/v1 ../../../../../CastVoteRecords/NIST_V0_cast_vote_records.xsd"
 xmlns="http://itl.nist.gov/ns/voting/1500-103/v1">
    <CVR>
        <BallotStyleId>bedrock-precinct-ballot</BallotStyleId>
        <CurrentSnapshotId>snapshot-01</CurrentSnapshotId>
        

        <!-- Base snapshot is derived from the output from the mobile app -->
        <CVRSnapshot ObjectId="snapshot-01">
            <CVRContest>
                <ContestId>contest-ballot-measure-gadget-county-1</ContestId>
                <CVRContestSelection>
                    <ContestSelectionId>contest-ballot-measure-1--selection-yes</ContestSelectionId>
                    <SelectionPosition>
                        <HasIndication>yes</HasIndication>
                        <IsAllocable>unknown</IsAllocable>
                        <NumberVotes>1</NumberVotes>
                    </SelectionPosition>
                </CVRContestSelection>
            </CVRContest>
            <Type>original</Type>
        </CVRSnapshot>
        <ElectionId>gadget-county-2021-06</ElectionId>
    </CVR>
    <Election ObjectId="gadget-county-2021-06">
        <Code>
            <Type>local-level</Type>
            <Value>bedrock-precinct</Value>
        </Code>
        <Contest ObjectId="contest-ballot-measure-gadget-county-1" xsi:type="BallotMeasureContest">
            <Code>
                <Type>local-level</Type>
                <Value>contest-gadget-county-ballot-measure-1</Value>
            </Code>
            <ContestSelection xsi:type="BallotMeasureSelection" ObjectId="contest-ballot-measure-1--selection-yes">
                <Code>
                    <Type>local-level</Type>
                    <Value>yes</Value>
                </Code>
                <Selection>yes</Selection>
            </ContestSelection>
            <ContestSelection xsi:type="BallotMeasureSelection" ObjectId="contest-ballot-measure-1--selection-no">
                <Code>
                    <Type>local-level</Type>
                    <Value>no</Value>
                </Code>
                <Selection>no</Selection>
            </ContestSelection>
        </Contest>
        
        <ElectionScopeId>bedrock-precinct</ElectionScopeId>
    </Election>
    <GeneratedDate>2021-06-01T12:00:00-08:00</GeneratedDate>
    <GpUnit ObjectId="bedrock-precinct">
        <Name>bedrock precinct</Name>
        <Type>precinct</Type>
    </GpUnit>
    <ReportGeneratingDeviceIds>ballot-marker-1</ReportGeneratingDeviceIds>
    <ReportingDevice ObjectId="ballot-marker-1">
        <Application>Trust the Vote application</Application>
    </ReportingDevice>
    <Version>1.0.0</Version>
</CastVoteRecordReport>
`;
