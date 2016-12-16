import {
    ROLE_ADMIN,
    ROLE_OWNER,
    ROLE_COUNSELOR
} from '../constants';

const accessSchema = (Schema) => ({
    role: {
        type: String,
        enum: [ROLE_ADMIN, ROLE_OWNER, ROLE_COUNSELOR]
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'School'
    }
});

const checkAccess = (access) => (
    access.role === ROLE_COUNSELOR ? !!access.school : true
);

export default (Schema) => ({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    profile: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    enabled: {
        type: Boolean,
        default: true
    },
    access: {
        type: accessSchema(Schema),
        validate: {
            validator: checkAccess,
            message: 'School must be selected'
        },
        default: {}
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
});