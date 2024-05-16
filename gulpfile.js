require('code-forensics').configure(
    {
        repository: {
            rootPath: "/home/freyes/workspace/demo-code-forensic/repositories/ApprovalTests.Net",
        }
    }
);
function defaultTask(cb) {
    console.log("yh");
    cb();
}

exports.default = defaultTask;