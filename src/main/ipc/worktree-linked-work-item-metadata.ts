import type { WorktreeMeta } from '../../shared/worktree/meta-types'
import type { Worktree } from '../../shared/worktree/types'

type LinkedWorkItemMetadata = Pick<
  Worktree,
  | 'linkedIssueUrl'
  | 'linkedGitLabMR'
  | 'linkedGitLabIssue'
  | 'linkedBitbucketPR'
  | 'linkedAzureDevOpsPR'
  | 'linkedGiteaPR'
  | 'linkedWorkItem'
  | 'linkedTaskSourceContext'
>

export function getLinkedWorkItemMetadata(meta: WorktreeMeta | undefined): LinkedWorkItemMetadata {
  return {
    // Why: only when set, so rows that never held one keep their exact projected shape.
    ...(meta?.linkedIssueUrl ? { linkedIssueUrl: meta.linkedIssueUrl } : {}),
    linkedGitLabMR: meta?.linkedGitLabMR ?? null,
    linkedGitLabIssue: meta?.linkedGitLabIssue ?? null,
    linkedBitbucketPR: meta?.linkedBitbucketPR ?? null,
    linkedAzureDevOpsPR: meta?.linkedAzureDevOpsPR ?? null,
    linkedGiteaPR: meta?.linkedGiteaPR ?? null,
    linkedWorkItem: meta?.linkedWorkItem ?? null,
    linkedTaskSourceContext: meta?.linkedTaskSourceContext ?? null
  }
}
