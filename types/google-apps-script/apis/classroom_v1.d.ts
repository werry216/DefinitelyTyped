// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Classroom_v1 {
    namespace Collection {
      namespace Courses {
        namespace CourseWork {
          export interface StudentSubmissionsCollection {
            // Returns a student submission.
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course, course work, or student submission or for
            // access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            get(courseId: string, courseWorkId: string, id: string): Classroom_v1.Schema.StudentSubmission;
            // Returns a list of student submissions that the requester is permitted to
            // view, factoring in the OAuth scopes of the request.
            // `-` may be specified as the `course_work_id` to include student
            // submissions for multiple course work items.
            // Course students may only view their own work. Course teachers
            // and domain administrators may view all student submissions.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, or for access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course does not exist.
            list(courseId: string, courseWorkId: string): Classroom_v1.Schema.ListStudentSubmissionsResponse;
            // Returns a list of student submissions that the requester is permitted to
            // view, factoring in the OAuth scopes of the request.
            // `-` may be specified as the `course_work_id` to include student
            // submissions for multiple course work items.
            // Course students may only view their own work. Course teachers
            // and domain administrators may view all student submissions.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, or for access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course does not exist.
            list(courseId: string, courseWorkId: string, optionalArgs: object): Classroom_v1.Schema.ListStudentSubmissionsResponse;
            // Modifies attachments of student submission.
            // Attachments may only be added to student submissions belonging to course
            // work objects with a `workType` of `ASSIGNMENT`.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, if the user is not permitted to modify
            // attachments on the requested student submission, or for
            // access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            modifyAttachments(resource: Schema.ModifyAttachmentsRequest, courseId: string, courseWorkId: string, id: string): Classroom_v1.Schema.StudentSubmission;
            // Updates one or more fields of a student submission.
            // See google.StudentSubmission for details
            // of which fields may be updated and who may change them.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting developer project did not create
            // the corresponding course work, if the user is not permitted to make the
            // requested modification to the student submission, or for
            // access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            patch(resource: Schema.StudentSubmission, courseId: string, courseWorkId: string, id: string): Classroom_v1.Schema.StudentSubmission;
            // Updates one or more fields of a student submission.
            // See google.StudentSubmission for details
            // of which fields may be updated and who may change them.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting developer project did not create
            // the corresponding course work, if the user is not permitted to make the
            // requested modification to the student submission, or for
            // access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            patch(resource: Schema.StudentSubmission, courseId: string, courseWorkId: string, id: string, optionalArgs: object): Classroom_v1.Schema.StudentSubmission;
            // Reclaims a student submission on behalf of the student that owns it.
            // Reclaiming a student submission transfers ownership of attached Drive
            // files to the student and updates the submission state.
            // Only the student that owns the requested student submission may call this
            // method, and only for a student submission that has been turned in.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, unsubmit the requested student submission,
            // or for access errors.
            // * `FAILED_PRECONDITION` if the student submission has not been turned in.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            reclaim(resource: any, courseId: string, courseWorkId: string, id: string): void;
            // Returns a student submission.
            // Returning a student submission transfers ownership of attached Drive
            // files to the student and may also update the submission state.
            // Unlike the Classroom application, returning a student submission does not
            // set assignedGrade to the draftGrade value.
            // Only a teacher of the course that contains the requested student submission
            // may call this method.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, return the requested student submission,
            // or for access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            return(resource: any, courseId: string, courseWorkId: string, id: string): void;
            // Turns in a student submission.
            // Turning in a student submission transfers ownership of attached Drive
            // files to the teacher and may also update the submission state.
            // This may only be called by the student that owns the specified student
            // submission.
            // This request must be made by the Developer Console project of the
            // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
            // create the corresponding course work item.
            // This method returns the following error codes:
            // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
            // requested course or course work, turn in the requested student submission,
            // or for access errors.
            // * `INVALID_ARGUMENT` if the request is malformed.
            // * `NOT_FOUND` if the requested course, course work, or student submission
            // does not exist.
            turnIn(resource: any, courseId: string, courseWorkId: string, id: string): void;
          }
        }
        export interface AliasesCollection {
          // Creates an alias for a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to create the
          // alias or for access errors.
          // * `NOT_FOUND` if the course does not exist.
          // * `ALREADY_EXISTS` if the alias already exists.
          // * `FAILED_PRECONDITION` if the alias requested does not make sense for the
          //   requesting user or course (for example, if a user not in a domain
          //   attempts to access a domain-scoped alias).
          create(resource: Schema.CourseAlias, courseId: string): Classroom_v1.Schema.CourseAlias;
          // Returns a list of aliases for a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // course or for access errors.
          // * `NOT_FOUND` if the course does not exist.
          list(courseId: string): Classroom_v1.Schema.ListCourseAliasesResponse;
          // Returns a list of aliases for a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // course or for access errors.
          // * `NOT_FOUND` if the course does not exist.
          list(courseId: string, optionalArgs: object): Classroom_v1.Schema.ListCourseAliasesResponse;
          // Deletes an alias of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to remove the
          // alias or for access errors.
          // * `NOT_FOUND` if the alias does not exist.
          // * `FAILED_PRECONDITION` if the alias requested does not make sense for the
          //   requesting user or course (for example, if a user not in a domain
          //   attempts to delete a domain-scoped alias).
          remove(courseId: string, alias: string): void;
        }
        export interface AnnouncementsCollection {
          // Creates an announcement.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course, create announcements in the requested course, share a
          // Drive attachment, or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          // * `FAILED_PRECONDITION` for the following request error:
          //     * AttachmentNotVisible
          create(resource: Schema.Announcement, courseId: string): Classroom_v1.Schema.Announcement;
          // Returns an announcement.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course or announcement, or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course or announcement does not exist.
          get(courseId: string, id: string): Classroom_v1.Schema.Announcement;
          // Returns a list of announcements that the requester is permitted to view.
          // Course students may only view `PUBLISHED` announcements. Course teachers
          // and domain administrators may view all announcements.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access
          // the requested course or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          list(courseId: string): Classroom_v1.Schema.ListAnnouncementsResponse;
          // Returns a list of announcements that the requester is permitted to view.
          // Course students may only view `PUBLISHED` announcements. Course teachers
          // and domain administrators may view all announcements.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access
          // the requested course or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          list(courseId: string, optionalArgs: object): Classroom_v1.Schema.ListAnnouncementsResponse;
          // Modifies assignee mode and options of an announcement.
          // Only a teacher of the course that contains the announcement may
          // call this method.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course or course work or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course or course work does not exist.
          modifyAssignees(resource: Schema.ModifyAnnouncementAssigneesRequest, courseId: string, id: string): Classroom_v1.Schema.Announcement;
          // Updates one or more fields of an announcement.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding announcement or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `FAILED_PRECONDITION` if the requested announcement has already been
          // deleted.
          // * `NOT_FOUND` if the requested course or announcement does not exist
          patch(resource: Schema.Announcement, courseId: string, id: string): Classroom_v1.Schema.Announcement;
          // Updates one or more fields of an announcement.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding announcement or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `FAILED_PRECONDITION` if the requested announcement has already been
          // deleted.
          // * `NOT_FOUND` if the requested course or announcement does not exist
          patch(resource: Schema.Announcement, courseId: string, id: string, optionalArgs: object): Classroom_v1.Schema.Announcement;
          // Deletes an announcement.
          // This request must be made by the Developer Console project of the
          // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
          // create the corresponding announcement item.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding announcement, if the requesting user is not permitted
          // to delete the requested course or for access errors.
          // * `FAILED_PRECONDITION` if the requested announcement has already been
          // deleted.
          // * `NOT_FOUND` if no course exists with the requested ID.
          remove(courseId: string, id: string): void;
        }
        export interface CourseWorkCollection {
          StudentSubmissions?: Classroom_v1.Collection.Courses.CourseWork.StudentSubmissionsCollection;
          // Creates course work.
          // The resulting course work (and corresponding student submissions) are
          // associated with the Developer Console project of the
          // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
          // make the request. Classroom API requests to modify course work and student
          // submissions must be made with an OAuth client ID from the associated
          // Developer Console project.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course, create course work in the requested course, share a
          // Drive attachment, or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          // * `FAILED_PRECONDITION` for the following request error:
          //     * AttachmentNotVisible
          create(resource: Schema.CourseWork, courseId: string): Classroom_v1.Schema.CourseWork;
          // Returns course work.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course or course work, or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course or course work does not exist.
          get(courseId: string, id: string): Classroom_v1.Schema.CourseWork;
          // Returns a list of course work that the requester is permitted to view.
          // Course students may only view `PUBLISHED` course work. Course teachers
          // and domain administrators may view all course work.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access
          // the requested course or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          list(courseId: string): Classroom_v1.Schema.ListCourseWorkResponse;
          // Returns a list of course work that the requester is permitted to view.
          // Course students may only view `PUBLISHED` course work. Course teachers
          // and domain administrators may view all course work.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access
          // the requested course or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course does not exist.
          list(courseId: string, optionalArgs: object): Classroom_v1.Schema.ListCourseWorkResponse;
          // Modifies assignee mode and options of a coursework.
          // Only a teacher of the course that contains the coursework may
          // call this method.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
          // requested course or course work or for access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `NOT_FOUND` if the requested course or course work does not exist.
          modifyAssignees(resource: Schema.ModifyCourseWorkAssigneesRequest, courseId: string, id: string): Classroom_v1.Schema.CourseWork;
          // Updates one or more fields of a course work.
          // See google.CourseWork for details
          // of which fields may be updated and who may change them.
          // This request must be made by the Developer Console project of the
          // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
          // create the corresponding course work item.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding course work, if the user is not permitted to make the
          // requested modification to the student submission, or for
          // access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `FAILED_PRECONDITION` if the requested course work has already been
          // deleted.
          // * `NOT_FOUND` if the requested course, course work, or student submission
          // does not exist.
          patch(resource: Schema.CourseWork, courseId: string, id: string): Classroom_v1.Schema.CourseWork;
          // Updates one or more fields of a course work.
          // See google.CourseWork for details
          // of which fields may be updated and who may change them.
          // This request must be made by the Developer Console project of the
          // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
          // create the corresponding course work item.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding course work, if the user is not permitted to make the
          // requested modification to the student submission, or for
          // access errors.
          // * `INVALID_ARGUMENT` if the request is malformed.
          // * `FAILED_PRECONDITION` if the requested course work has already been
          // deleted.
          // * `NOT_FOUND` if the requested course, course work, or student submission
          // does not exist.
          patch(resource: Schema.CourseWork, courseId: string, id: string, optionalArgs: object): Classroom_v1.Schema.CourseWork;
          // Deletes a course work.
          // This request must be made by the Developer Console project of the
          // [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
          // create the corresponding course work item.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting developer project did not create
          // the corresponding course work, if the requesting user is not permitted
          // to delete the requested course or for access errors.
          // * `FAILED_PRECONDITION` if the requested course work has already been
          // deleted.
          // * `NOT_FOUND` if no course exists with the requested ID.
          remove(courseId: string, id: string): void;
        }
        export interface StudentsCollection {
          // Adds a user as a student of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to create
          // students in this course or for access errors.
          // * `NOT_FOUND` if the requested course ID does not exist.
          // * `FAILED_PRECONDITION` if the requested user's account is disabled,
          // for the following request errors:
          //     * CourseMemberLimitReached
          //     * CourseNotModifiable
          //     * UserGroupsMembershipLimitReached
          // * `ALREADY_EXISTS` if the user is already a student or teacher in the
          // course.
          create(resource: Schema.Student, courseId: string): Classroom_v1.Schema.Student;
          // Adds a user as a student of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to create
          // students in this course or for access errors.
          // * `NOT_FOUND` if the requested course ID does not exist.
          // * `FAILED_PRECONDITION` if the requested user's account is disabled,
          // for the following request errors:
          //     * CourseMemberLimitReached
          //     * CourseNotModifiable
          //     * UserGroupsMembershipLimitReached
          // * `ALREADY_EXISTS` if the user is already a student or teacher in the
          // course.
          create(resource: Schema.Student, courseId: string, optionalArgs: object): Classroom_v1.Schema.Student;
          // Returns a student of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to view
          // students of this course or for access errors.
          // * `NOT_FOUND` if no student of this course has the requested ID or if the
          // course does not exist.
          get(courseId: string, userId: string): Classroom_v1.Schema.Student;
          // Returns a list of students of this course that the requester
          // is permitted to view.
          // This method returns the following error codes:
          // * `NOT_FOUND` if the course does not exist.
          // * `PERMISSION_DENIED` for access errors.
          list(courseId: string): Classroom_v1.Schema.ListStudentsResponse;
          // Returns a list of students of this course that the requester
          // is permitted to view.
          // This method returns the following error codes:
          // * `NOT_FOUND` if the course does not exist.
          // * `PERMISSION_DENIED` for access errors.
          list(courseId: string, optionalArgs: object): Classroom_v1.Schema.ListStudentsResponse;
          // Deletes a student of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to delete
          // students of this course or for access errors.
          // * `NOT_FOUND` if no student of this course has the requested ID or if the
          // course does not exist.
          remove(courseId: string, userId: string): void;
        }
        export interface TeachersCollection {
          // Creates a teacher of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not  permitted to create
          // teachers in this course or for access errors.
          // * `NOT_FOUND` if the requested course ID does not exist.
          // * `FAILED_PRECONDITION` if the requested user's account is disabled,
          // for the following request errors:
          //     * CourseMemberLimitReached
          //     * CourseNotModifiable
          //     * CourseTeacherLimitReached
          //     * UserGroupsMembershipLimitReached
          // * `ALREADY_EXISTS` if the user is already a teacher or student in the
          // course.
          create(resource: Schema.Teacher, courseId: string): Classroom_v1.Schema.Teacher;
          // Returns a teacher of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to view
          // teachers of this course or for access errors.
          // * `NOT_FOUND` if no teacher of this course has the requested ID or if the
          // course does not exist.
          get(courseId: string, userId: string): Classroom_v1.Schema.Teacher;
          // Returns a list of teachers of this course that the requester
          // is permitted to view.
          // This method returns the following error codes:
          // * `NOT_FOUND` if the course does not exist.
          // * `PERMISSION_DENIED` for access errors.
          list(courseId: string): Classroom_v1.Schema.ListTeachersResponse;
          // Returns a list of teachers of this course that the requester
          // is permitted to view.
          // This method returns the following error codes:
          // * `NOT_FOUND` if the course does not exist.
          // * `PERMISSION_DENIED` for access errors.
          list(courseId: string, optionalArgs: object): Classroom_v1.Schema.ListTeachersResponse;
          // Deletes a teacher of a course.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to delete
          // teachers of this course or for access errors.
          // * `NOT_FOUND` if no teacher of this course has the requested ID or if the
          // course does not exist.
          // * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher
          // of this course.
          remove(courseId: string, userId: string): void;
        }
      }
      namespace UserProfiles {
        export interface GuardianInvitationsCollection {
          // Creates a guardian invitation, and sends an email to the guardian asking
          // them to confirm that they are the student's guardian.
          // Once the guardian accepts the invitation, their `state` will change to
          // `COMPLETED` and they will start receiving guardian notifications. A
          // `Guardian` resource will also be created to represent the active guardian.
          // The request object must have the `student_id` and
          // `invited_email_address` fields set. Failing to set these fields, or
          // setting any other fields in the request, will result in an error.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the current user does not have permission to
          //   manage guardians, if the guardian in question has already rejected
          //   too many requests for that student, if guardians are not enabled for the
          //   domain in question, or for other access errors.
          // * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian
          //   link limit.
          // * `INVALID_ARGUMENT` if the guardian email address is not valid (for
          //   example, if it is too long), or if the format of the student ID provided
          //   cannot be recognized (it is not an email address, nor a `user_id` from
          //   this API). This error will also be returned if read-only fields are set,
          //   or if the `state` field is set to to a value other than `PENDING`.
          // * `NOT_FOUND` if the student ID provided is a valid student ID, but
          //   Classroom has no record of that student.
          // * `ALREADY_EXISTS` if there is already a pending guardian invitation for
          //   the student and `invited_email_address` provided, or if the provided
          //   `invited_email_address` matches the Google account of an existing
          //   `Guardian` for this user.
          create(resource: Schema.GuardianInvitation, studentId: string): Classroom_v1.Schema.GuardianInvitation;
          // Returns a specific guardian invitation.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the requesting user is not permitted to view
          //   guardian invitations for the student identified by the `student_id`, if
          //   guardians are not enabled for the domain in question, or for other
          //   access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`).
          // * `NOT_FOUND` if Classroom cannot find any record of the given student or
          //   `invitation_id`. May also be returned if the student exists, but the
          //   requesting user does not have access to see that student.
          get(studentId: string, invitationId: string): Classroom_v1.Schema.GuardianInvitation;
          // Returns a list of guardian invitations that the requesting user is
          // permitted to view, filtered by the parameters provided.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
          //   user is not permitted to view guardian invitations for that student, if
          //   `"-"` is specified as the `student_id` and the user is not a domain
          //   administrator, if guardians are not enabled for the domain in question,
          //   or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`). May also be returned if an invalid
          //   `page_token` or `state` is provided.
          // * `NOT_FOUND` if a `student_id` is specified, and its format can be
          //   recognized, but Classroom has no record of that student.
          list(studentId: string): Classroom_v1.Schema.ListGuardianInvitationsResponse;
          // Returns a list of guardian invitations that the requesting user is
          // permitted to view, filtered by the parameters provided.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
          //   user is not permitted to view guardian invitations for that student, if
          //   `"-"` is specified as the `student_id` and the user is not a domain
          //   administrator, if guardians are not enabled for the domain in question,
          //   or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`). May also be returned if an invalid
          //   `page_token` or `state` is provided.
          // * `NOT_FOUND` if a `student_id` is specified, and its format can be
          //   recognized, but Classroom has no record of that student.
          list(studentId: string, optionalArgs: object): Classroom_v1.Schema.ListGuardianInvitationsResponse;
          // Modifies a guardian invitation.
          // Currently, the only valid modification is to change the `state` from
          // `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the current user does not have permission to
          //   manage guardians, if guardians are not enabled for the domain in question
          //   or for other access errors.
          // * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
          // * `INVALID_ARGUMENT` if the format of the student ID provided
          //   cannot be recognized (it is not an email address, nor a `user_id` from
          //   this API), or if the passed `GuardianInvitation` has a `state` other than
          //   `COMPLETE`, or if it modifies fields other than `state`.
          // * `NOT_FOUND` if the student ID provided is a valid student ID, but
          //   Classroom has no record of that student, or if the `id` field does not
          //   refer to a guardian invitation known to Classroom.
          patch(resource: Schema.GuardianInvitation, studentId: string, invitationId: string): Classroom_v1.Schema.GuardianInvitation;
          // Modifies a guardian invitation.
          // Currently, the only valid modification is to change the `state` from
          // `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if the current user does not have permission to
          //   manage guardians, if guardians are not enabled for the domain in question
          //   or for other access errors.
          // * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
          // * `INVALID_ARGUMENT` if the format of the student ID provided
          //   cannot be recognized (it is not an email address, nor a `user_id` from
          //   this API), or if the passed `GuardianInvitation` has a `state` other than
          //   `COMPLETE`, or if it modifies fields other than `state`.
          // * `NOT_FOUND` if the student ID provided is a valid student ID, but
          //   Classroom has no record of that student, or if the `id` field does not
          //   refer to a guardian invitation known to Classroom.
          patch(resource: Schema.GuardianInvitation, studentId: string, invitationId: string, optionalArgs: object): Classroom_v1.Schema.GuardianInvitation;
        }
        export interface GuardiansCollection {
          // Returns a specific guardian.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if no user that matches the provided `student_id`
          //   is visible to the requesting user, if the requesting user is not
          //   permitted to view guardian information for the student identified by the
          //   `student_id`, if guardians are not enabled for the domain in question,
          //   or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`).
          // * `NOT_FOUND` if the requesting user is permitted to view guardians for
          //   the requested `student_id`, but no `Guardian` record exists for that
          //   student that matches the provided `guardian_id`.
          get(studentId: string, guardianId: string): Classroom_v1.Schema.Guardian;
          // Returns a list of guardians that the requesting user is permitted to
          // view, restricted to those that match the request.
          // To list guardians for any student that the requesting user may view
          // guardians for, use the literal character `-` for the student ID.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
          //   user is not permitted to view guardian information for that student, if
          //   `"-"` is specified as the `student_id` and the user is not a domain
          //   administrator, if guardians are not enabled for the domain in question,
          //   if the `invited_email_address` filter is set by a user who is not a
          //   domain administrator, or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`). May also be returned if an invalid
          //   `page_token` is provided.
          // * `NOT_FOUND` if a `student_id` is specified, and its format can be
          //   recognized, but Classroom has no record of that student.
          list(studentId: string): Classroom_v1.Schema.ListGuardiansResponse;
          // Returns a list of guardians that the requesting user is permitted to
          // view, restricted to those that match the request.
          // To list guardians for any student that the requesting user may view
          // guardians for, use the literal character `-` for the student ID.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
          //   user is not permitted to view guardian information for that student, if
          //   `"-"` is specified as the `student_id` and the user is not a domain
          //   administrator, if guardians are not enabled for the domain in question,
          //   if the `invited_email_address` filter is set by a user who is not a
          //   domain administrator, or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API, nor the literal string `me`). May also be returned if an invalid
          //   `page_token` is provided.
          // * `NOT_FOUND` if a `student_id` is specified, and its format can be
          //   recognized, but Classroom has no record of that student.
          list(studentId: string, optionalArgs: object): Classroom_v1.Schema.ListGuardiansResponse;
          // Deletes a guardian.
          // The guardian will no longer receive guardian notifications and the guardian
          // will no longer be accessible via the API.
          // This method returns the following error codes:
          // * `PERMISSION_DENIED` if no user that matches the provided `student_id`
          //   is visible to the requesting user, if the requesting user is not
          //   permitted to manage guardians for the student identified by the
          //   `student_id`, if guardians are not enabled for the domain in question,
          //   or for other access errors.
          // * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
          //   be recognized (it is not an email address, nor a `student_id` from the
          //   API).
          // * `NOT_FOUND` if the requesting user is permitted to modify guardians for
          //   the requested `student_id`, but no `Guardian` record exists for that
          //   student with the provided `guardian_id`.
          remove(studentId: string, guardianId: string): void;
        }
      }
      export interface CoursesCollection {
        Aliases?: Classroom_v1.Collection.Courses.AliasesCollection;
        Announcements?: Classroom_v1.Collection.Courses.AnnouncementsCollection;
        CourseWork?: Classroom_v1.Collection.Courses.CourseWorkCollection;
        Students?: Classroom_v1.Collection.Courses.StudentsCollection;
        Teachers?: Classroom_v1.Collection.Courses.TeachersCollection;
        // Creates a course.
        // The user specified in `ownerId` is the owner of the created course
        // and added as a teacher.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // courses or for access errors.
        // * `NOT_FOUND` if the primary teacher is not a valid user.
        // * `FAILED_PRECONDITION` if the course owner's account is disabled or for
        // the following request errors:
        //     * UserGroupsMembershipLimitReached
        // * `ALREADY_EXISTS` if an alias was specified in the `id` and
        // already exists.
        create(resource: Schema.Course): Classroom_v1.Schema.Course;
        // Returns a course.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        get(id: string): Classroom_v1.Schema.Course;
        // Returns a list of courses that the requesting user is permitted to view,
        // restricted to those that match the request. Returned courses are ordered by
        // creation time, with the most recently created coming first.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` for access errors.
        // * `INVALID_ARGUMENT` if the query argument is malformed.
        // * `NOT_FOUND` if any users specified in the query arguments do not exist.
        list(): Classroom_v1.Schema.ListCoursesResponse;
        // Returns a list of courses that the requesting user is permitted to view,
        // restricted to those that match the request. Returned courses are ordered by
        // creation time, with the most recently created coming first.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` for access errors.
        // * `INVALID_ARGUMENT` if the query argument is malformed.
        // * `NOT_FOUND` if any users specified in the query arguments do not exist.
        list(optionalArgs: object): Classroom_v1.Schema.ListCoursesResponse;
        // Updates one or more fields in a course.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
        // if no update mask is supplied.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        patch(resource: Schema.Course, id: string): Classroom_v1.Schema.Course;
        // Updates one or more fields in a course.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
        // if no update mask is supplied.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        patch(resource: Schema.Course, id: string, optionalArgs: object): Classroom_v1.Schema.Course;
        // Deletes a course.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        remove(id: string): void;
        // Updates a course.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        update(resource: Schema.Course, id: string): Classroom_v1.Schema.Course;
      }
      export interface InvitationsCollection {
        // Accepts an invitation, removing it and adding the invited user to the
        // teachers or students (as appropriate) of the specified course. Only the
        // invited user may accept an invitation.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to accept the
        // requested invitation or for access errors.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseMemberLimitReached
        //     * CourseNotModifiable
        //     * CourseTeacherLimitReached
        //     * UserGroupsMembershipLimitReached
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        accept(id: string): void;
        // Creates an invitation. Only one invitation for a user and course may exist
        // at a time. Delete and re-create an invitation to make changes.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // invitations for this course or for access errors.
        // * `NOT_FOUND` if the course or the user does not exist.
        // * `FAILED_PRECONDITION` if the requested user's account is disabled or if
        // the user already has this role or a role with greater permissions.
        // * `ALREADY_EXISTS` if an invitation for the specified user and course
        // already exists.
        create(resource: Schema.Invitation): Classroom_v1.Schema.Invitation;
        // Returns an invitation.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        get(id: string): Classroom_v1.Schema.Invitation;
        // Returns a list of invitations that the requesting user is permitted to
        // view, restricted to those that match the list request.
        // *Note:* At least one of `user_id` or `course_id` must be supplied. Both
        // fields can be supplied.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` for access errors.
        list(): Classroom_v1.Schema.ListInvitationsResponse;
        // Returns a list of invitations that the requesting user is permitted to
        // view, restricted to those that match the list request.
        // *Note:* At least one of `user_id` or `course_id` must be supplied. Both
        // fields can be supplied.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` for access errors.
        list(optionalArgs: object): Classroom_v1.Schema.ListInvitationsResponse;
        // Deletes an invitation.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        remove(id: string): void;
      }
      export interface RegistrationsCollection {
        // Creates a `Registration`, causing Classroom to start sending notifications
        // from the provided `feed` to the destination provided in `cloudPubSubTopic`.
        // Returns the created `Registration`. Currently, this will be the same as
        // the argument, but with server-assigned fields such as `expiry_time` and
        // `id` filled in.
        // Note that any value specified for the `expiry_time` or `id` fields will be
        // ignored.
        // While Classroom may validate the `cloudPubSubTopic` and return errors on a
        // best effort basis, it is the caller's responsibility to ensure that it
        // exists and that Classroom has permission to publish to it.
        // This method may return the following error codes:
        // * `PERMISSION_DENIED` if:
        //     * the authenticated user does not have permission to receive
        //       notifications from the requested field; or
        //     * the credential provided does not include the appropriate scope for
        //       the requested feed.
        //     * another access error is encountered.
        // * `INVALID_ARGUMENT` if:
        //     * no `cloudPubsubTopic` is specified, or the specified
        //       `cloudPubsubTopic` is not valid; or
        //     * no `feed` is specified, or the specified `feed` is not valid.
        // * `NOT_FOUND` if:
        //     * the specified `feed` cannot be located, or the requesting user does
        //       not have permission to determine whether or not it exists; or
        //     * the specified `cloudPubsubTopic` cannot be located, or Classroom has
        //       not been granted permission to publish to it.
        create(resource: Schema.Registration): Classroom_v1.Schema.Registration;
        // Deletes a `Registration`, causing Classroom to stop sending notifications
        // for that `Registration`.
        remove(registrationId: string): void;
      }
      export interface UserProfilesCollection {
        GuardianInvitations?: Classroom_v1.Collection.UserProfiles.GuardianInvitationsCollection;
        Guardians?: Classroom_v1.Collection.UserProfiles.GuardiansCollection;
        // Returns a user profile.
        // This method returns the following error codes:
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access
        // this user profile, if no profile exists with the requested ID, or for
        // access errors.
        get(userId: string): Classroom_v1.Schema.UserProfile;
      }
    }
    namespace Schema {
      export interface Announcement {
        alternateLink?: string;
        assigneeMode?: string;
        courseId?: string;
        creationTime?: string;
        creatorUserId?: string;
        id?: string;
        individualStudentsOptions?: Classroom_v1.Schema.IndividualStudentsOptions;
        materials?: Classroom_v1.Schema.Material[];
        scheduledTime?: string;
        state?: string;
        text?: string;
        updateTime?: string;
      }
      export interface Assignment {
        studentWorkFolder?: Classroom_v1.Schema.DriveFolder;
      }
      export interface AssignmentSubmission {
        attachments?: Classroom_v1.Schema.Attachment[];
      }
      export interface Attachment {
        driveFile?: Classroom_v1.Schema.DriveFile;
        form?: Classroom_v1.Schema.Form;
        link?: Classroom_v1.Schema.Link;
        youTubeVideo?: Classroom_v1.Schema.YouTubeVideo;
      }
      export interface CloudPubsubTopic {
        topicName?: string;
      }
      export interface Course {
        alternateLink?: string;
        calendarId?: string;
        courseGroupEmail?: string;
        courseMaterialSets?: Classroom_v1.Schema.CourseMaterialSet[];
        courseState?: string;
        creationTime?: string;
        description?: string;
        descriptionHeading?: string;
        enrollmentCode?: string;
        guardiansEnabled?: boolean;
        id?: string;
        name?: string;
        ownerId?: string;
        room?: string;
        section?: string;
        teacherFolder?: Classroom_v1.Schema.DriveFolder;
        teacherGroupEmail?: string;
        updateTime?: string;
      }
      export interface CourseAlias {
        alias?: string;
      }
      export interface CourseMaterial {
        driveFile?: Classroom_v1.Schema.DriveFile;
        form?: Classroom_v1.Schema.Form;
        link?: Classroom_v1.Schema.Link;
        youTubeVideo?: Classroom_v1.Schema.YouTubeVideo;
      }
      export interface CourseMaterialSet {
        materials?: Classroom_v1.Schema.CourseMaterial[];
        title?: string;
      }
      export interface CourseRosterChangesInfo {
        courseId?: string;
      }
      export interface CourseWork {
        alternateLink?: string;
        assigneeMode?: string;
        assignment?: Classroom_v1.Schema.Assignment;
        associatedWithDeveloper?: boolean;
        courseId?: string;
        creationTime?: string;
        creatorUserId?: string;
        description?: string;
        dueDate?: Classroom_v1.Schema.Date;
        dueTime?: Classroom_v1.Schema.TimeOfDay;
        id?: string;
        individualStudentsOptions?: Classroom_v1.Schema.IndividualStudentsOptions;
        materials?: Classroom_v1.Schema.Material[];
        maxPoints?: Number;
        multipleChoiceQuestion?: Classroom_v1.Schema.MultipleChoiceQuestion;
        scheduledTime?: string;
        state?: string;
        submissionModificationMode?: string;
        title?: string;
        updateTime?: string;
        workType?: string;
      }
      export interface CourseWorkChangesInfo {
        courseId?: string;
      }
      export interface Date {
        day?: number;
        month?: number;
        year?: number;
      }
      export interface DriveFile {
        alternateLink?: string;
        id?: string;
        thumbnailUrl?: string;
        title?: string;
      }
      export interface DriveFolder {
        alternateLink?: string;
        id?: string;
        title?: string;
      }
      export interface Feed {
        courseRosterChangesInfo?: Classroom_v1.Schema.CourseRosterChangesInfo;
        courseWorkChangesInfo?: Classroom_v1.Schema.CourseWorkChangesInfo;
        feedType?: string;
      }
      export interface Form {
        formUrl?: string;
        responseUrl?: string;
        thumbnailUrl?: string;
        title?: string;
      }
      export interface GlobalPermission {
        permission?: string;
      }
      export interface GradeHistory {
        actorUserId?: string;
        gradeChangeType?: string;
        gradeTimestamp?: string;
        maxPoints?: Number;
        pointsEarned?: Number;
      }
      export interface Guardian {
        guardianId?: string;
        guardianProfile?: Classroom_v1.Schema.UserProfile;
        invitedEmailAddress?: string;
        studentId?: string;
      }
      export interface GuardianInvitation {
        creationTime?: string;
        invitationId?: string;
        invitedEmailAddress?: string;
        state?: string;
        studentId?: string;
      }
      export interface IndividualStudentsOptions {
        studentIds?: string[];
      }
      export interface Invitation {
        courseId?: string;
        id?: string;
        role?: string;
        userId?: string;
      }
      export interface Link {
        thumbnailUrl?: string;
        title?: string;
        url?: string;
      }
      export interface ListAnnouncementsResponse {
        announcements?: Classroom_v1.Schema.Announcement[];
        nextPageToken?: string;
      }
      export interface ListCourseAliasesResponse {
        aliases?: Classroom_v1.Schema.CourseAlias[];
        nextPageToken?: string;
      }
      export interface ListCourseWorkResponse {
        courseWork?: Classroom_v1.Schema.CourseWork[];
        nextPageToken?: string;
      }
      export interface ListCoursesResponse {
        courses?: Classroom_v1.Schema.Course[];
        nextPageToken?: string;
      }
      export interface ListGuardianInvitationsResponse {
        guardianInvitations?: Classroom_v1.Schema.GuardianInvitation[];
        nextPageToken?: string;
      }
      export interface ListGuardiansResponse {
        guardians?: Classroom_v1.Schema.Guardian[];
        nextPageToken?: string;
      }
      export interface ListInvitationsResponse {
        invitations?: Classroom_v1.Schema.Invitation[];
        nextPageToken?: string;
      }
      export interface ListStudentSubmissionsResponse {
        nextPageToken?: string;
        studentSubmissions?: Classroom_v1.Schema.StudentSubmission[];
      }
      export interface ListStudentsResponse {
        nextPageToken?: string;
        students?: Classroom_v1.Schema.Student[];
      }
      export interface ListTeachersResponse {
        nextPageToken?: string;
        teachers?: Classroom_v1.Schema.Teacher[];
      }
      export interface Material {
        driveFile?: Classroom_v1.Schema.SharedDriveFile;
        form?: Classroom_v1.Schema.Form;
        link?: Classroom_v1.Schema.Link;
        youtubeVideo?: Classroom_v1.Schema.YouTubeVideo;
      }
      export interface ModifyAnnouncementAssigneesRequest {
        assigneeMode?: string;
        modifyIndividualStudentsOptions?: Classroom_v1.Schema.ModifyIndividualStudentsOptions;
      }
      export interface ModifyAttachmentsRequest {
        addAttachments?: Classroom_v1.Schema.Attachment[];
      }
      export interface ModifyCourseWorkAssigneesRequest {
        assigneeMode?: string;
        modifyIndividualStudentsOptions?: Classroom_v1.Schema.ModifyIndividualStudentsOptions;
      }
      export interface ModifyIndividualStudentsOptions {
        addStudentIds?: string[];
        removeStudentIds?: string[];
      }
      export interface MultipleChoiceQuestion {
        choices?: string[];
      }
      export interface MultipleChoiceSubmission {
        answer?: string;
      }
      export interface Name {
        familyName?: string;
        fullName?: string;
        givenName?: string;
      }
      export interface Registration {
        cloudPubsubTopic?: Classroom_v1.Schema.CloudPubsubTopic;
        expiryTime?: string;
        feed?: Classroom_v1.Schema.Feed;
        registrationId?: string;
      }
      export interface SharedDriveFile {
        driveFile?: Classroom_v1.Schema.DriveFile;
        shareMode?: string;
      }
      export interface ShortAnswerSubmission {
        answer?: string;
      }
      export interface StateHistory {
        actorUserId?: string;
        state?: string;
        stateTimestamp?: string;
      }
      export interface Student {
        courseId?: string;
        profile?: Classroom_v1.Schema.UserProfile;
        studentWorkFolder?: Classroom_v1.Schema.DriveFolder;
        userId?: string;
      }
      export interface StudentSubmission {
        alternateLink?: string;
        assignedGrade?: Number;
        assignmentSubmission?: Classroom_v1.Schema.AssignmentSubmission;
        associatedWithDeveloper?: boolean;
        courseId?: string;
        courseWorkId?: string;
        courseWorkType?: string;
        creationTime?: string;
        draftGrade?: Number;
        id?: string;
        late?: boolean;
        multipleChoiceSubmission?: Classroom_v1.Schema.MultipleChoiceSubmission;
        shortAnswerSubmission?: Classroom_v1.Schema.ShortAnswerSubmission;
        state?: string;
        submissionHistory?: Classroom_v1.Schema.SubmissionHistory[];
        updateTime?: string;
        userId?: string;
      }
      export interface SubmissionHistory {
        gradeHistory?: Classroom_v1.Schema.GradeHistory;
        stateHistory?: Classroom_v1.Schema.StateHistory;
      }
      export interface Teacher {
        courseId?: string;
        profile?: Classroom_v1.Schema.UserProfile;
        userId?: string;
      }
      export interface TimeOfDay {
        hours?: number;
        minutes?: number;
        nanos?: number;
        seconds?: number;
      }
      export interface UserProfile {
        emailAddress?: string;
        id?: string;
        name?: Classroom_v1.Schema.Name;
        permissions?: Classroom_v1.Schema.GlobalPermission[];
        photoUrl?: string;
        verifiedTeacher?: boolean;
      }
      export interface YouTubeVideo {
        alternateLink?: string;
        id?: string;
        thumbnailUrl?: string;
        title?: string;
      }
    }
  }
  export interface Classroom_v1 {
    Courses?: Classroom_v1.Collection.CoursesCollection;
    Invitations?: Classroom_v1.Collection.InvitationsCollection;
    Registrations?: Classroom_v1.Collection.RegistrationsCollection;
    UserProfiles?: Classroom_v1.Collection.UserProfilesCollection;
    // Create a new instance of Announcement
    newAnnouncement(): Classroom_v1.Schema.Announcement;
    // Create a new instance of Assignment
    newAssignment(): Classroom_v1.Schema.Assignment;
    // Create a new instance of AssignmentSubmission
    newAssignmentSubmission(): Classroom_v1.Schema.AssignmentSubmission;
    // Create a new instance of Attachment
    newAttachment(): Classroom_v1.Schema.Attachment;
    // Create a new instance of CloudPubsubTopic
    newCloudPubsubTopic(): Classroom_v1.Schema.CloudPubsubTopic;
    // Create a new instance of Course
    newCourse(): Classroom_v1.Schema.Course;
    // Create a new instance of CourseAlias
    newCourseAlias(): Classroom_v1.Schema.CourseAlias;
    // Create a new instance of CourseMaterial
    newCourseMaterial(): Classroom_v1.Schema.CourseMaterial;
    // Create a new instance of CourseMaterialSet
    newCourseMaterialSet(): Classroom_v1.Schema.CourseMaterialSet;
    // Create a new instance of CourseRosterChangesInfo
    newCourseRosterChangesInfo(): Classroom_v1.Schema.CourseRosterChangesInfo;
    // Create a new instance of CourseWork
    newCourseWork(): Classroom_v1.Schema.CourseWork;
    // Create a new instance of CourseWorkChangesInfo
    newCourseWorkChangesInfo(): Classroom_v1.Schema.CourseWorkChangesInfo;
    // Create a new instance of Date
    newDate(): Classroom_v1.Schema.Date;
    // Create a new instance of DriveFile
    newDriveFile(): Classroom_v1.Schema.DriveFile;
    // Create a new instance of DriveFolder
    newDriveFolder(): Classroom_v1.Schema.DriveFolder;
    // Create a new instance of Feed
    newFeed(): Classroom_v1.Schema.Feed;
    // Create a new instance of Form
    newForm(): Classroom_v1.Schema.Form;
    // Create a new instance of GlobalPermission
    newGlobalPermission(): Classroom_v1.Schema.GlobalPermission;
    // Create a new instance of GradeHistory
    newGradeHistory(): Classroom_v1.Schema.GradeHistory;
    // Create a new instance of GuardianInvitation
    newGuardianInvitation(): Classroom_v1.Schema.GuardianInvitation;
    // Create a new instance of IndividualStudentsOptions
    newIndividualStudentsOptions(): Classroom_v1.Schema.IndividualStudentsOptions;
    // Create a new instance of Invitation
    newInvitation(): Classroom_v1.Schema.Invitation;
    // Create a new instance of Link
    newLink(): Classroom_v1.Schema.Link;
    // Create a new instance of Material
    newMaterial(): Classroom_v1.Schema.Material;
    // Create a new instance of ModifyAnnouncementAssigneesRequest
    newModifyAnnouncementAssigneesRequest(): Classroom_v1.Schema.ModifyAnnouncementAssigneesRequest;
    // Create a new instance of ModifyAttachmentsRequest
    newModifyAttachmentsRequest(): Classroom_v1.Schema.ModifyAttachmentsRequest;
    // Create a new instance of ModifyCourseWorkAssigneesRequest
    newModifyCourseWorkAssigneesRequest(): Classroom_v1.Schema.ModifyCourseWorkAssigneesRequest;
    // Create a new instance of ModifyIndividualStudentsOptions
    newModifyIndividualStudentsOptions(): Classroom_v1.Schema.ModifyIndividualStudentsOptions;
    // Create a new instance of MultipleChoiceQuestion
    newMultipleChoiceQuestion(): Classroom_v1.Schema.MultipleChoiceQuestion;
    // Create a new instance of MultipleChoiceSubmission
    newMultipleChoiceSubmission(): Classroom_v1.Schema.MultipleChoiceSubmission;
    // Create a new instance of Name
    newName(): Classroom_v1.Schema.Name;
    // Create a new instance of ReclaimStudentSubmissionRequest
    newReclaimStudentSubmissionRequest(): any;
    // Create a new instance of Registration
    newRegistration(): Classroom_v1.Schema.Registration;
    // Create a new instance of ReturnStudentSubmissionRequest
    newReturnStudentSubmissionRequest(): any;
    // Create a new instance of SharedDriveFile
    newSharedDriveFile(): Classroom_v1.Schema.SharedDriveFile;
    // Create a new instance of ShortAnswerSubmission
    newShortAnswerSubmission(): Classroom_v1.Schema.ShortAnswerSubmission;
    // Create a new instance of StateHistory
    newStateHistory(): Classroom_v1.Schema.StateHistory;
    // Create a new instance of Student
    newStudent(): Classroom_v1.Schema.Student;
    // Create a new instance of StudentSubmission
    newStudentSubmission(): Classroom_v1.Schema.StudentSubmission;
    // Create a new instance of SubmissionHistory
    newSubmissionHistory(): Classroom_v1.Schema.SubmissionHistory;
    // Create a new instance of Teacher
    newTeacher(): Classroom_v1.Schema.Teacher;
    // Create a new instance of TimeOfDay
    newTimeOfDay(): Classroom_v1.Schema.TimeOfDay;
    // Create a new instance of TurnInStudentSubmissionRequest
    newTurnInStudentSubmissionRequest(): any;
    // Create a new instance of UserProfile
    newUserProfile(): Classroom_v1.Schema.UserProfile;
    // Create a new instance of YouTubeVideo
    newYouTubeVideo(): Classroom_v1.Schema.YouTubeVideo;
  }
}

declare var Classroom_v1: GoogleAppsScript.Classroom_v1;